import { Injectable } from '@angular/core';
import { Car } from 'src/app/interfaces/car/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarListService {
  carList: Car[] = [
    {
      image: '../../../assets/images/cars/logan.jpg',
      id: 0,
      name: 'Dacia',
      model: 'Logan',
      description: 'Design robust, grilă frontală cromată, faruri cu design original Dacia. Logan este o mașină modernă și foarte practică, la un preț imbatabil.',
      color: 'white',
      doors: 4,
      engine: '1.4',
      engineType: 'Gas',
      power: 75,
      consumption: 6,
      available: true,
      price: 34.99
    },
    {
      image: '../../../assets/images/cars/docker.jpg',
      id: 1,
      name: 'Dacia',
      model: 'Docker',
      description: 'Un autovehicul pentru activități de familie în timpul liber, dinamic și robust. Liniile sale armonioase și solide îi conferă un aspect îndrăzneț și elegant. Dokker este un autovehicul recreațional adaptabil, cu un spațiu interior record.',
      color: 'white',
      doors: 5,
      engine: '1.4',
      engineType: 'Gas',
      power: 75,
      consumption: 7,
      available: true,
      price: 39.99,
      detailsImage: '../../../assets/images/cars-details/dacia-dokker-details.png'
    },
    {
      image: '../../../assets/images/cars/docker.jpg',
      id: 2,
      name: 'Dacia',
      model: 'Docker',
      description: 'Un autovehicul pentru activități de familie în timpul liber, dinamic și robust. Liniile sale armonioase și solide îi conferă un aspect îndrăzneț și elegant. Dokker este un autovehicul recreațional adaptabil, cu un spațiu interior record.',
      color: 'white',
      doors: 5,
      engine: '1.4',
      engineType: 'Gas',
      power: 75,
      consumption: 7,
      available: false,
      price: 39.99
    },
    {
      image: '../../../assets/images/cars/mercedes-vito.jpg',
      id: 3,
      name: 'Mercedes',
      model: 'Vito',
      description: 'Vrei, poți și faci: modelul Vito și variantele sale Furgon, Mixto și Tourer.',
      color: 'black',
      doors: 5,
      engine: '1.9',
      engineType: 'Diesel',
      power: 120,
      consumption: 9,
      available: true,
      price: 79.99
    }
  ];

  constructor() {}

  getCarList() {
    return this.carList;
  }

  getCar(index) {
    return this.carList[index];
  }
}
