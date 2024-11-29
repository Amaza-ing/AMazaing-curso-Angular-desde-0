import { Component } from '@angular/core';
import { ChildComponent } from './components/child/child.component';

@Component({
    selector: 'app-root',
    imports: [ChildComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = "";
  info = "Info desde el padre";
  title = "Novedades en Angular 19";

  setName(e: any) {
    this.name = e;
  }
}
