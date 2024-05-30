import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieFormComponent } from '../../components/movie-form/movie-form.component';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [HeaderComponent, MovieFormComponent],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css'
})
export class FormPageComponent {

}
