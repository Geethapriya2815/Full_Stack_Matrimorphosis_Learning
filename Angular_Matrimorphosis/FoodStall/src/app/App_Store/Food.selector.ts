import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FoodState } from './Food.reducer';

export const selectFoodState = createFeatureSelector<FoodState>('food');

export const selectAllFoodItems = createSelector(
  selectFoodState,
  (state) => state.items
);

export const selectTotalItems = createSelector(
  selectAllFoodItems,
  (items) => items.length
);

export const selectTotalPrice = createSelector(selectAllFoodItems, (items) =>
  items.reduce((total, item) => total + item.price, 0)
);
