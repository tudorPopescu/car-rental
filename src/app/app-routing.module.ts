import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CarListComponent } from './components/cars/car-list/car-list.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'car/list',
    component: CarListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
