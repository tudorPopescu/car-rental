import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarListService } from 'src/app/services/car/car-list.service';
import { Car } from 'src/app/interfaces/car/car';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  cars: Car[];

  constructor(private clService: CarListService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cars = [
      {
        id: this.route.snapshot.params.id
      }
    ]
  }

}
