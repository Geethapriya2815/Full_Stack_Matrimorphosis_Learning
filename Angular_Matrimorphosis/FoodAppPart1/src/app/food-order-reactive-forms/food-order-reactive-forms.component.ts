import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-food-order-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './food-order-reactive-forms.component.html',
  styleUrls: ['./food-order-reactive-forms.component.css'],
})
export class FoodOrderReactiveFormsComponent {
  orderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      customerName: new FormControl('', [
        Validators.required, // built-in validator
        this.noNumbersValidator, // custom validator
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        ), // ✅ Correct regex
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/), // ✅ Correct regex
      ]),
      address: new FormControl('', [Validators.required]),
      noOfItems: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(10),
      ]),
      specialInstructions: new FormControl(''),
    ]);
  }

  // ✅ Form submit function
  onSubmit() {
    if (this.orderForm.valid) {
      console.log('✅ Order Details:', this.orderForm.value);
      alert('Order submitted successfully!');
    } else {
      console.log('❌ Form invalid');
      this.orderForm.markAllAsTouched();
    }
  }

  // ✅ Getters for form controls
  get customerName() {
    return this.orderForm.get('customerName');
  }
  get email() {
    return this.orderForm.get('email');
  }
  get phone() {
    return this.orderForm.get('phone');
  }
  get address() {
    return this.orderForm.get('address');
  }
  get noOfItems() {
    return this.orderForm.get('noOfItems');
  }
  get specialInstructions() {
    return this.orderForm.get('specialInstructions');
  }

  noNumbersValidator(control: AbstractControl): ValidationErrors | null {
    const hasNumber = /\d/.test(control.value);
    return hasNumber ? { hasNumber: true } : null;
  }
}
