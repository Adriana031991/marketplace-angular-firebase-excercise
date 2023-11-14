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

  @Input() path: String = ''
  service = inject(HomeService)
  constructor() {
    effect(() => {
      this.service.sampleProductLimit()
    });

    effect(() => {
      this.sampleProductData = this.service.homeBannerData
    });
  }

  sampleProductData = signal<IProduct[]>([])




}
