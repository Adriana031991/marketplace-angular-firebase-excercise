import { Component } from '@angular/core';
import { imagen_path } from 'src/environment/config';

@Component({
  selector: 'marketplace-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  path: String = imagen_path.url

}
