import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectTotalItems,
  selectTotalPrice,
} from '../../App_Store/Food.selector';

@Component({
  selector: 'app-food-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-stats.component.html',
  styleUrls: ['./food-stats.component.css'],
})
export class FoodStatsComponent {
  totalItems$: Observable<number>;
  totalPrice$: Observable<number>;

  constructor(private store: Store) {
    this.totalItems$ = this.store.select(selectTotalItems);
    this.totalPrice$ = this.store.select(selectTotalPrice);
  }
}
