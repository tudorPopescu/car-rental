import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarListComponent } from './components/cars/car-list/car-list.component';
import { CarDetailsComponent } from './components/cars/car-details/car-details.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'car/list',
    component: CarListComponent
  },
  {
    path: 'car/details/:id',
    component: CarDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
