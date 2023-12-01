import { Component, Input, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';
import { IProduct } from 'src/app/shared/models/IProduct.interface';
import { CarouselDealHotComponent } from './carousel-deal-hot/carousel-deal-hot.component';
import { CarouselTopBestSellerComponent } from './carousel-top-best-seller/carousel-top-best-seller.component';

@Component({
  selector: 'marketplace-home-deal-hot-today',
  standalone: true,
  imports: [CommonModule, CarouselDealHotComponent, CarouselTopBestSellerComponent],
  templateUrl: './home-deal-hot-today.component.html',
  styleUrls: ['./home-deal-hot-today.component.scss']
})
export class HomeDealHotTodayComponent {


  service = inject(HomeService)
  preload = computed(() => this.service.preload());
  productOffersData = computed(() => {
    console.log('pasa ', this.service.getProductsToGallery());
    return this.service.getProductsToGallery()
  })

}
