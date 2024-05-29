import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  constructor(public productService: ProductService) {}
}
