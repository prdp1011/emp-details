import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getNewsDetails(): Observable<any[]> {
    return this.http.get<any[]>('http://dummy.restapiexample.com/api/v1/employees');
  }
}
