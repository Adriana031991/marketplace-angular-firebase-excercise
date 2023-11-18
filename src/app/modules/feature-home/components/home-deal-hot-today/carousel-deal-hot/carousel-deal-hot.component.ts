
import { Component, Input, ViewChild, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbCarousel, NgbCarouselModule, } from '@ng-bootstrap/ng-bootstrap';
import { IProduct } from 'src/app/shared/models/IProduct.interface';
import { CarouselGalleryComponent } from './carousel-gallery/carousel-gallery.component';


@Component({
  selector: 'marketplace-carousel-deal-hot',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, RouterModule, CarouselGalleryComponent],
  providers: [NgbCarousel],
  templateUrl: './carousel-deal-hot.component.html',
  styleUrls: ['./carousel-deal-hot.component.scss']
})


export class CarouselDealHotComponent {
  @Input() path: String = ''
  @Input() productsOffers: IProduct[] = []
  @ViewChild('firstCarousel') carouselView: NgbCarousel | undefined;
  save: Number = 0;
  discountdate: Date = new Date();

  discount(event: Number) {
    this.save = event

  }

  offerDate(event: any) {
    this.discountdate = event
  }

  previousCarousel() {
    if (this.carouselView) {
      this.carouselView.prev();
    }
  }

  nextsCarousel() {
    if (this.carouselView) {
      this.carouselView.next();
    }
  }





}
