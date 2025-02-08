import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mood } from '../interfaces/mood';
import { Observable } from 'rxjs';
import { Alert } from '../interfaces/alert';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private BASE_URL = 'http://localhost:3630/student'

  constructor(private http: HttpClient) { }

  // Create a mood
  public createMood(mood: Mood): Observable<Object> {
    return this.http.post(`${this.BASE_URL}/mood`, mood, {
      withCredentials: true,
      responseType: 'text'
    });
  }

  // Create a alert
  public createAlert(alert: Alert): Observable<Object> {
    return this.http.post(`${this.BASE_URL}/alert`, alert, {
      withCredentials: true,
      responseType: 'text'
    });
  }
}
