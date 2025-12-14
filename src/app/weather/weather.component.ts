import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  name = 'Moheed Shaik';
  email = 'moheedshaik@email.com';
  role = 'Angular Developer';
  experience = '4+ years';
}
