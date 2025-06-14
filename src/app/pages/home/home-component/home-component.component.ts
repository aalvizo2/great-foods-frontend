import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';
import { RestaurantsComponent } from '../../../components/restaurant-list/restaurant-list.component';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import { DisclaimerDivComponent } from '../../../components/disclaimer/disclaimer-div/disclaimer-div.component';
import ScrollReveal from 'scrollreveal';
@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [
    RestaurantsComponent,
    NavbarComponent,
    DisclaimerDivComponent
  ],
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],

})
export class HomeComponentComponent implements AfterViewInit{
    ngAfterViewInit(): void{
       ScrollReveal().reveal('.reveal', {
         duration: 1000,
         distance: '30px',
         origin: 'left',
         easing: 'ease-in-out',
         reset: true
       })
    }
}
