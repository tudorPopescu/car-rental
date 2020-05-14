import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownToggleDirective } from './directives/dropdown-toggle.directive';
import { CarComponent } from './components/cars/car/car.component';
import { CarListComponent } from './components/cars/car-list/car-list.component';
import { CarListService } from './services/car/car-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DropdownToggleDirective,
    CarComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [CarListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
