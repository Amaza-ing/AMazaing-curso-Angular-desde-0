import { Component, input, output } from '@angular/core';

@Component({
    selector: 'app-child',
    imports: [],
    templateUrl: './child.component.html',
    styleUrl: './child.component.css'
})
export class ChildComponent {
  readonly login = output<any>();

  readonly info = input<string>("");

  userName: string = 'Adrián!';

  handleLogin() {
    this.login.emit(this.userName);
  }
}
