import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: any[];

  constructor() {
    this.users = [];
  }

  getUsers(): void {}

  getUser(id: string): any {
    return;
  }
}
