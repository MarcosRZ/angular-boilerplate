import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public lastRequestTime;
  public forecast = {};

  constructor(private weatherService: WeatherService) {
    this.getForecast = this.getForecast.bind(this);
  }

  ngOnInit() {
    setInterval(this.getForecast, 1000);
  }

  getForecast(): void {
    console.log('COMPONENT CALLS SERVICE!');
    this.weatherService.getForecast().subscribe(f => this.forecast = ({...f, date: new Date().getTime()}));
  }

}
