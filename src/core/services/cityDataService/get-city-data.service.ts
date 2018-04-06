import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';


@Injectable()
export class GetCityDataService {

  constructor(private http: HttpClient) { }
  getCityData(url): Observable<any> {
    return this.http.get(url);
  }
}
