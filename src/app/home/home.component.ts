import { Component } from '@angular/core';

import {CommonModule} from "@angular/common";
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from "../housing-location";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  // isso é uma prop que usa a interface para definir
  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Teste Home',
    city: 'Teste cidade',
    state: 'SC',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  }
}
