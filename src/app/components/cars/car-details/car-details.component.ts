import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car/car.interface';
import { CarListService } from 'src/app/services/car/car-list.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  cars: Car;
  carId: number;

  constructor(private clService: CarListService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.carId = params.id;
          this.cars = this.clService.getCar(this.carId);
        }
      );
  }

}
