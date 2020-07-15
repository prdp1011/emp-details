import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDataFromApi(): Observable<any[]> {
    return this.http.get<any[]>('http://dummy.restapiexample.com/api/v1/employees');
  }
}
