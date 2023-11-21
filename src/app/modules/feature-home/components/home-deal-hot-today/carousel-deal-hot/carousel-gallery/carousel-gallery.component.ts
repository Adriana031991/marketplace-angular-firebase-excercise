import { Component, Input, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbCarousel, NgbCarouselModule, } from '@ng-bootstrap/ng-bootstrap';
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
  @Output() dataOffer = new EventEmitter<{ discount: Number, dateOffer: string }>();
  @ViewChild('secondCarousel') secondCarousel: NgbCarousel | undefined;
  savings: number = 0;

  showImage(index: any) {
    this.secondCarousel?.select(index)
  }

  ngOnInit(): void {
    if (this.offers?.offer[0] == 'Disccount') {
      this.dataOffer.emit(
        {
          discount: Math.floor(this.offers?.price - (this.offers?.price * parseInt(this.offers?.offer[1]) / 100)),
          dateOffer: this.offers?.offer[2]
        }
      )
      this.savings = Math.floor(this.offers?.price * parseInt(this.offers?.offer[1]) / 100)
    }

    if (this.offers?.offer[0] == 'Fixed') {
      this.dataOffer.emit({
        discount: Math.floor(this.offers?.price - parseInt(this.offers?.offer[1])),
        dateOffer: this.offers?.offer[2]
      }
      )
      this.savings = Math.floor(parseInt(this.offers?.offer[1]))
    }
  }

}
