import { UserInterface } from './../models/users.interface';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<UserInterface[]> {
    return this.httpClient.get<UserInterface[]>(environment.urlAPI);
  }

  getUserById(id: number): Observable<UserInterface> {
    return this.httpClient.get<UserInterface>(`${environment.urlAPI}/${id}`);
  }

  addUser(data: UserInterface) {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post(environment.urlAPI, data, { headers });
  }

  updateUserById(id: number, data: UserInterface) {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.put(`${environment.urlAPI}/${id}`, data, {
      headers,
    });
  }

  deleteUserById(id: number) {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.delete(`${environment.urlAPI}/${id}`, { headers });
  }
}
