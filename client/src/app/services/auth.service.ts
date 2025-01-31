import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = 'http://localhost:3630/auth'

  constructor(private http: HttpClient) { }

  // Get a list of firstname to show on the login page
  public getFirstNames(): Observable<string[]> {
    return this.http.get<string[]>(`${this.BASE_URL}/users`);
  }

  // Try to login the user
  public login(first_name: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/login`, { first_name, password }, {
      withCredentials: true 
    });
  }

  // Get the user actually logged in
  public currentLoggedUser(): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/user`, {
      withCredentials: true
    });
  }

  // Logout the user
  public logout(): Observable<string> {
    return this.http.post(`${this.BASE_URL}/logout`, null, {
      withCredentials: true,
      responseType: 'text'
    });
  }
}





