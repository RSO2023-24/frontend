import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Hike } from '../models/Hike';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  private hikesUrl = environment['url'] + '/hike/v1/hikes';
  private userUrl = environment['url'] + '/hiker/v1/users';
  private locationUrl = environment['url'] + '/location/v1/location';
  private weatherUrl = environment['url'] + '/weather/v1/weather/current';


  getHikes(lat: number, lon: number, distance: number, difficulty: number) {
    // Define the parameters
    let params = new HttpParams()
        .set('lat', String(lat))
        .set('lon', String(lon))
        .set('distance', String(distance))
        .set('difficulty', String(difficulty));

    // Make the GET request and return the result
    return this.http.get<Hike[]>(this.hikesUrl, { params: params });
  }

  createUser(firstName: string, lastName: string) {
    let headers = new HttpHeaders()
        .set('Content-Type', 'application/json');

    let body = {
      "firstName": firstName,
      "lastName": lastName,
      "age": 25,
      "skill": 1,
      "sex": "Male",
      "longtitude": 45.1234,
      "latitude": 12.5678
    };

    return this.http.post<any>(this.userUrl, body, { headers: headers });
  }

  getLocations() {
    return this.http.get<any>(this.locationUrl);
  }

  getWeather(lat: number, long: number) {
    return this.http.get<any>(this.weatherUrl + '?lat=' + lat + '&lon=' + long);
  }


}
