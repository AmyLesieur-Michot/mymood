import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Group } from '../interfaces/group';
import { Alert } from '../interfaces/alert';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
private BASE_URL = 'http://localhost:3630/admin'

  constructor(private http: HttpClient) { }

  // Get all users
  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}`, {
      withCredentials: true
    });
  }

  // Create a user
  public createUser(user: User): Observable<Object> {
    return this.http.post(`${this.BASE_URL}`, user, {
      withCredentials: true,
      responseType: 'text'
    });
  }

  // Get a user by it's id
  public getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/${id}`, {
      withCredentials: true
    });
  }

  // Update informations on a user
  public updateUser(user: User): Observable<Object> {
    return this.http.patch(`${this.BASE_URL}/${user.id}`, user, {
      withCredentials: true,
      responseType: 'text'
    });
  }

  // Delete a user by it's id
  public deleteUser(id: number): Observable<Object> {
    return this.http.delete(`${this.BASE_URL}/${id}`, {
      withCredentials: true,
      responseType: 'text'
    });
  }

  // Get all groups
  public getAllGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.BASE_URL}/groups`, {
      withCredentials: true
    });
  }

  // Create a group
  public createGroup(group: Group): Observable<Object> {
    return this.http.post(`${this.BASE_URL}/group`, group, {
      withCredentials: true,
      responseType: 'text'
    });
  }

  // Get a group by it's id
  public getGroup(id: number): Observable<Group> {
    return this.http.get<Group>(`${this.BASE_URL}/group/${id}`, {
      withCredentials: true
    });
  }

  // Update informations on a group
  public updateGroup(group: Group): Observable<Object> {
    return this.http.put(`${this.BASE_URL}/group/${group.id}`, group, {
      withCredentials: true,
      responseType: 'text'
    });
  }

  // Delete a group by it's id
  public deleteGroup(id: number): Observable<Object> {
    return this.http.delete(`${this.BASE_URL}/group/${id}`, {
      withCredentials: true,
      responseType: 'text' 
    });
  }

  // Update informations on a alert
  public updateAlert(alert: Alert): Observable<Object> {
    return this.http.put(`${this.BASE_URL}/alert/${alert.id}`, alert, {
      withCredentials: true,
      responseType: 'text' 
    });
  }

  // Add a user to a group
  public addUserToGroup(group: Group, user: User): Observable<Object> {
    return this.http.post(`${this.BASE_URL}/group/${group.id}/add/${user.id}`, {}, {
      withCredentials: true,
      responseType: 'text',
    });
  }
}







