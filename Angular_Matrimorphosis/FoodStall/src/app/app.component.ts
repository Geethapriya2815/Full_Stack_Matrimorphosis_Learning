import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListComponent } from './components/food-list/food-list.component';
import { FoodStatsComponent } from './components/food-stats/food-stats.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FoodListComponent, FoodStatsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FoodAppPart1';
}
