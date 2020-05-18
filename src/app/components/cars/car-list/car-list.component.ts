import { Component, OnInit } from '@angular/core';
import { CarListService } from 'src/app/services/car/car-list.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  cars = [];

  constructor(private clService: CarListService) { }

  ngOnInit(): void {
    this.cars = this.clService.getCars();
  }

}
