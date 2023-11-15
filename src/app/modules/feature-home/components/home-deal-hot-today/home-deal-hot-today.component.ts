import { Component, Input, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';
import { IProduct } from 'src/app/shared/models/IProduct.interface';
import { CarouselDealHotComponent } from './carousel-deal-hot/carousel-deal-hot.component';

@Component({
  selector: 'marketplace-home-deal-hot-today',
  standalone: true,
  imports: [CommonModule, CarouselDealHotComponent],
  templateUrl: './home-deal-hot-today.component.html',
  styleUrls: ['./home-deal-hot-today.component.scss']
})
export class HomeDealHotTodayComponent {

  @Input() path: String = ''
  service = inject(HomeService)
  preload: Boolean = true;

  constructor() {
    effect(() => {
      // this.service.sampleProductLimit()
      // this.sampleProductData = this.service.homeBannerData
      this.preload = this.service.preload()
      this.service.getProductsToGallery()
    });
  }

  sampleProductData = signal<IProduct[]>([])

}
