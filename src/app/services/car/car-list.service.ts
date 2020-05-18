import { Injectable } from '@angular/core';
import { Car } from '../../interfaces/car/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarListService {
  cars: Car[] = [
    {
      id: 0,
      name: 'Ferrari 458 Italia Spider',
      image: '../../../assets/images/cars/ferrari-spider.jpg',
      price: 2999.99,
      discountPrice: 1599.00,
      stock: true
    },
    {
      id: 1,
      name: 'Mclaren 650S',
      image: '../../../assets/images/cars/mclaren-650S.jpg',
      price: 3499.99,
      discountPrice: 2456.00,
      stock: true
    },
    {
      id: 2,
      name: 'Ferrari California',
      image: '../../../assets/images/cars/ferrari-california.jpg',
      price: 2999.99,
      discountPrice: 1599.00,
      stock: true
    },
    {
      id: 3,
      name: 'Aston Martin DB9',
      image: '../../../assets/images/cars/aston-martin-db9.jpg',
      price: 3459.99,
      discountPrice: 2159.00,
      stock: false
    },
    {
      id: 4,
      name: 'Mercedes S550',
      image: '../../../assets/images/cars/mercedes-s550.jpg',
      price: 6999.99,
      discountPrice: 4999.00,
      stock: true
    },
    {
      id: 5,
      name: 'Lexus LFA',
      image: '../../../assets/images/cars/lexus-lfa.jpg',
      price: 4329.99,
      discountPrice: 2444.00,
      stock: false
    }
  ];

  constructor() {}

  getCars() {
    return this.cars;
  }

}
