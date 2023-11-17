import { Component, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
export class CarouselGalleryComponent {
  @Input() path: String = ''
  @Input() offers: IProduct | undefined;
  @ViewChild('secondCarousel') secondCarousel: NgbCarousel | undefined;


  showImage(index: any) {
    this.secondCarousel?.select(index)
  }


}
