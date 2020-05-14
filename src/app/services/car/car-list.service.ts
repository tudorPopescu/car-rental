import { Injectable } from '@angular/core';
import { Car } from 'src/app/interfaces/car/car';

@Injectable({
  providedIn: 'root'
})
export class CarListService {
  carList: Car[] = [];

  constructor() {}

  getCarList() {
    this.carList = [
      {
        id: 1,
        name: 'Dacia',
        model: 'Logan',
        doors: 4,
        engine: '1.4',
        engineType: 'Gas',
        power: 75,
        consumption: 6,
        available: true
      }
    ];
  }
}
