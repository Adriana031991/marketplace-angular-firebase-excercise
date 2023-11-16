import { Component, Input, ViewChild, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { IProduct } from 'src/app/shared/models/IProduct.interface';


@Component({
  selector: 'marketplace-carousel-deal-hot',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, RouterModule],
  providers: [NgbCarousel],
  templateUrl: './carousel-deal-hot.component.html',
  styleUrls: ['./carousel-deal-hot.component.scss']
})


export class CarouselDealHotComponent {
  @Input() path: String = ''
  @Input() productsOffers: IProduct[] = []
  @ViewChild(NgbCarousel) carouselView: NgbCarousel | undefined;

  constructor() {
    console.log(this.productsOffers);
    effect(() => {

    })
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
