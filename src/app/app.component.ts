import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { RestaurantsComponent } from './components/restaurant-list/restaurant-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'great-foods-frontend';
}
