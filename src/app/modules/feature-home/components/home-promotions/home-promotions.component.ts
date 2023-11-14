import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'marketplace-home-promotions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-promotions.component.html',
  styleUrls: ['./home-promotions.component.scss']
})
export class HomePromotionsComponent {
  @Input() path: String = ''

}
