import { Component, Input, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';
import { IProduct } from 'src/app/shared/models/IProduct.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'marketplace-home-promotions',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-promotions.component.html',
  styleUrls: ['./home-promotions.component.scss']
})
export class HomePromotionsComponent {
  @Input() path: String = ''
  service = inject(HomeService)
  preload: Boolean = true;

  constructor() {
    effect(() => {
      this.service.getSampleProductsLimited()
      this.sampleProductData = this.service.homeBannerData
      this.preload = this.service.preload()
    });
  }

  sampleProductData = signal<IProduct[]>([])

}
