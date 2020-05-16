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
import { CarDetailsComponent } from './components/cars/car-details/car-details.component';
import { ShortTextPipe } from './pipes/short-text.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgmCoreModule  } from '@agm/core';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DropdownToggleDirective,
    CarComponent,
    CarListComponent,
    CarDetailsComponent,
    ShortTextPipe,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA7PP6q31AQmznPL4KsYJV47XyCd8tPpkE'
    })
  ],
  providers: [CarListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
