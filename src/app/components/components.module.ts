import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example/example.component';
import { AppRouterModule } from '../routes';
import { ContactComponent } from './contact/contact.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  imports: [
    CommonModule,
    AppRouterModule,
  ],
  exports: [ExampleComponent, WeatherComponent],
  declarations: [ExampleComponent, ContactComponent, WeatherComponent]
})
export class ComponentsModule { }
