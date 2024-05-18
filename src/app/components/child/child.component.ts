import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Output()
  login: EventEmitter<any> = new EventEmitter<any>;

  userName: string = 'Adrián';

  handleLogin() {
    this.login.emit(this.userName);
  }
}