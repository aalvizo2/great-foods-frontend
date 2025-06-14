import { AfterViewInit, Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'disclaimer-div',
  imports: [],
  templateUrl: './disclaimer-div.component.html',
  styleUrl: './disclaimer-div.component.css'
})
export class DisclaimerDivComponent implements AfterViewInit{
   ngAfterViewInit(): void {
      ScrollReveal().reveal('.reveal',{
          duration: 1000,
          distance: '40px',
          origin: 'top',
          easing: 'ease-in-out',
          reset: true,
      });
   }
}
