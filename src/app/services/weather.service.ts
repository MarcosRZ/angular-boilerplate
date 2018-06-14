import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private stationName = 'campastilla';
  private url = `http://api.oceandrivers.com/v1.0/getWeatherDisplay/${this.stationName}`;

  constructor(
    private http: HttpClient
  ) { }

  getForecast(): Observable<Object> {
    console.log('SERVICE CALLS API');
      console.log('Sending request...');
      return this.http.get<Object>(this.url);
  }
}


