import { Component, Input, OnInit, ViewChild, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbCarousel, NgbCarouselModule, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'marketplace-carousel-deal-hot',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, RouterModule],
  providers: [NgbCarousel],
  templateUrl: './carousel-deal-hot.component.html',
  styleUrls: ['./carousel-deal-hot.component.scss']
})


export class CarouselDealHotComponent implements OnInit {
  @Input() path: String = ''
  @ViewChild(NgbCarousel) carouselView: NgbCarousel | undefined;

  constructor() {
    effect(() => {

    })
  }
  ngOnInit(): void {

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
