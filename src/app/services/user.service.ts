import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // readonly API_URL = "https://jsonplaceholder.typicode.com/users";
  readonly API_URL =
    'https://ca8d440d5f971164a0b0.free.beeceptor.com/api/users';

  users: User[];

  constructor(private http: HttpClient) {
    this.users = [];
  }

  getUsers() {
    return this.http.get<User[]>(this.API_URL);
  }

  getUser(id: string) {
    return this.http.get<User>(`${this.API_URL}/${id}`);
  }

  postUser(user: User) {
    return this.http.post<User>(this.API_URL, user);
  }

  deleteUser(id: number) {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
}
