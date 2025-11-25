import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FoodItem } from '../../models/food-item.model';
import { addFoodItem, removeFoodItem } from '../../App_Store/Food.action';
import { selectAllFoodItems } from '../../App_Store/Food.selector';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent {
  foodItems$: Observable<FoodItem[]>;

  constructor(private store: Store) {
    this.foodItems$ = this.store.select(selectAllFoodItems);
    console.log(this.foodItems$);
  }

  addRandom() {
    const randomFood: FoodItem = {
      id: Math.floor(Math.random() * 1000),
      name: 'Random Food ' + Math.floor(Math.random() * 100),
      price: +(Math.random() * 20).toFixed(2),
    };
    this.store.dispatch(addFoodItem({ foodItem: randomFood }));
  }

  remove(id: number) {
    this.store.dispatch(removeFoodItem({ id }));
  }
}
