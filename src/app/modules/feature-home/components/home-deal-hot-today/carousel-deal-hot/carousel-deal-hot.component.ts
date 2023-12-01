import { CountdownTimerModule } from './../../../../../../../projects/countdown-timer/src/lib/countdown-timer.module';

import { Component, Input, OnInit, ViewChild, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbCarousel, NgbCarouselModule, } from '@ng-bootstrap/ng-bootstrap';
import { IProduct } from 'src/app/shared/models/IProduct.interface';
import { CarouselGalleryComponent } from './carousel-gallery/carousel-gallery.component';


@Component({
  selector: 'marketplace-carousel-deal-hot',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, RouterModule, CarouselGalleryComponent, CountdownTimerModule],
  providers: [NgbCarousel],
  templateUrl: './carousel-deal-hot.component.html',
  styleUrls: ['./carousel-deal-hot.component.scss']
})


export class CarouselDealHotComponent implements OnInit {

  @Input() productsOffers: IProduct[] = []
  @ViewChild('firstCarousel') carouselView: NgbCarousel | undefined;
  discount: Number = 0;
  dateDiscount: string = '';
  totalReviews: number = 0;
  rating: Number = 0;
  reviewsLength: any;

  ngOnInit(): void {
    console.log(this.productsOffers);

    this.productsOffers.map(res => {
      this.reviewsLength = JSON.parse(res.reviews).length
      this.totalReviews = JSON.parse(res.reviews).reduce((accumulator: number, currentValue: { review: number, comment: string }) => {
        return accumulator + currentValue.review;
      }, 0)
    })
    this.rating = Math.round(this.totalReviews / this.reviewsLength)
  }

  dataOffer(event: { discount: Number, dateOffer: string }) {
    this.discount = event.discount;
    this.dateDiscount = event.dateOffer;
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
