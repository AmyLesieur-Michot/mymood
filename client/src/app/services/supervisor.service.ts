import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alert } from '../interfaces/alert';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {
private BASE_URL = 'http://localhost:3630/supervisor'

  constructor(private http: HttpClient) { }

  // Update informations on a alert
  public updateAlert(alert: Alert): Observable<Object> {
    return this.http.put(`${this.BASE_URL}/alert/${alert.id}`, alert, {
      withCredentials: true,
      responseType: 'text'
    });
  }
}
