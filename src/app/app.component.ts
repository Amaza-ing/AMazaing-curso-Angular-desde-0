import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Product from './models/Product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userName: string;
  myNumber: number;
  myBoolean: boolean;
  product: Product;

  constructor() {
    this.userName = "Adrián";
    this.myNumber = 10;
    this.myBoolean = true;
    this.product = {
      name: "Computer",
      price: 1000,
      isForSale: true
    }
  }
}
