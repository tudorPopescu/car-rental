import { Component, OnInit } from '@angular/core';
import { CarListService } from 'src/app/services/car/car-list.service';
import { Car } from './../../../interfaces/car/car';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];

  constructor(private clService: CarListService, private router: Router) { }

  ngOnInit(): void {
    this.cars = this.clService.getCarList();
  }

  onShowDetails(carId: number) {
    this.router.navigate(['/car', 'details', carId]);
  }

}
