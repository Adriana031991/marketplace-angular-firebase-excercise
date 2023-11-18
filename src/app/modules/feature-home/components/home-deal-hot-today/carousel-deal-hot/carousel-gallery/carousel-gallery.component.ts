import { Component, Input, QueryList, ViewChild, ViewChildren, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbCarousel, NgbCarouselModule, NgbSlide, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { IProduct } from 'src/app/shared/models/IProduct.interface';

@Component({
  selector: 'marketplace-carousel-gallery',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, RouterModule],
  templateUrl: './carousel-gallery.component.html',
  styleUrls: ['./carousel-gallery.component.scss']
})
export class CarouselGalleryComponent implements OnInit {
  @Input() path: String = ''
  @Input() offers: IProduct | undefined;
  @Output() discount = new EventEmitter<Number>();
  @ViewChild('secondCarousel') secondCarousel: NgbCarousel | undefined;
  savings: number = 0;
  @Output() dateOffer = new EventEmitter<Date>();

  showImage(index: any) {
    this.secondCarousel?.select(index)
  }

  ngOnInit(): void {

    if (this.offers) {
      this.discount.emit(Math.floor(this.offers?.price - (this.offers?.price * parseInt(this.offers?.offer[1]) / 100)))
      this.savings = Math.floor(this.offers?.price * parseInt(this.offers?.offer[1]) / 100)
      this.dateOffer.emit(new Date(
        parseInt(this.offers?.offer[2].split('-')[0]),
        parseInt(this.offers?.offer[2].split('-')[1]) - 1,
        parseInt(this.offers?.offer[2].split('-')[2]),
      ))
    }


    if (this.offers?.offer[0] == 'Fixed') {
      this.discount.emit(Math.floor(this.offers?.price - parseInt(this.offers?.offer[1])))
      this.savings = Math.floor(parseInt(this.offers?.offer[1]))
    }

  }

}
