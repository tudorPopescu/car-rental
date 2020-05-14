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
        image: '../../../assets/images/cars/logan.jpg',
        id: 1,
        name: 'Dacia',
        model: 'Logan',
        description: 'Design robust, grilă frontală cromată, faruri cu design original Dacia. Logan este o mașină modernă și foarte practică, la un preț imbatabil.',
        color: 'white',
        doors: 4,
        engine: '1.4',
        engineType: 'Gas',
        power: 75,
        consumption: 6,
        available: true
      },
      {
        image: '../../../assets/images/cars/docker.jpg',
        id: 2,
        name: 'Dacia',
        model: 'Docker',
        description: 'Design robust, grilă frontală cromată, faruri cu design original Dacia. Logan este o mașină modernă și foarte practică, la un preț imbatabil.',
        color: 'white',
        doors: 5,
        engine: '1.4',
        engineType: 'Gas',
        power: 75,
        consumption: 7,
        available: true
      },
      {
        image: '../../../assets/images/cars/docker.jpg',
        id: 3,
        name: 'Dacia',
        model: 'Docker',
        description: 'Design robust, grilă frontală cromată, faruri cu design original Dacia. Logan este o mașină modernă și foarte practică, la un preț imbatabil.',
        color: 'white',
        doors: 5,
        engine: '1.4',
        engineType: 'Gas',
        power: 75,
        consumption: 7,
        available: false
      },
      {
        image: '../../../assets/images/cars/mercedes-vito.jpg',
        id: 4,
        name: 'Mercedes',
        model: 'Vito',
        description: 'Design robust, grilă frontală cromată, faruri cu design original Dacia. Logan este o mașină modernă și foarte practică, la un preț imbatabil.',
        color: 'black',
        doors: 5,
        engine: '1.9',
        engineType: 'Diesel',
        power: 120,
        consumption: 9,
        available: true
      }
    ];

    return this.carList;
  }
}
