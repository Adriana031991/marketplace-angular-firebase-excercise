
import {  ChangeDetectorRef, Component, Input, OnInit, ViewChild, } from '@angular/core';
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


export class CarouselDealHotComponent implements OnInit {
  @Input() path: String = ''
  @Input() productsOffers: IProduct[] = []
  @ViewChild('firstCarousel') carouselView: NgbCarousel | undefined;

  gallery: String[] = [];
  category: String = '';

  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.productsOffers.map(res => {
      this.gallery = Array.from(res.gallery)
      this.category = res.category
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
