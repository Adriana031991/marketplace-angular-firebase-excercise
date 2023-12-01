import { Component, Input, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from 'src/app/shared/models/IProduct.interface';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'marketplace-home-banner',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, RouterModule],
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent {


  service = inject(HomeService)
  preload: Boolean = true;

  constructor() {
    effect(() => {
      this.service.getSampleProductsLimited()
      this.sampleProductData = this.service.productsData
      this.preload = this.service.preload()
    });
  }

  sampleProductData = signal<IProduct[]>([])


}
