import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsService } from '../../services/restaurants.service';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-list.component.html' // Asegúrate de tener este archivo y apuntar correctamente
})
export class RestaurantsComponent implements OnInit {
  restaurants: any[] = [];
  error: string | null = null;

  constructor(private restaurantsService: RestaurantsService) {}

  ngOnInit() {
    this.restaurantsService.getRestaurants().subscribe({
      next: (data: any[]) => {
        this.restaurants = data;
        this.error = null;
      },
      error: (err) => {
        console.error('Error al obtener restaurantes:', err);
        this.error = 'No se pudieron cargar los datos del servidor.';
      }
    });
  }
}
