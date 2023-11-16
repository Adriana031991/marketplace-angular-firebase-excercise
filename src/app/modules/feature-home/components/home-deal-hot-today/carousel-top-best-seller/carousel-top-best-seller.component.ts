import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { IProduct } from 'src/app/shared/models/IProduct.interface';

@Component({
  selector: 'marketplace-carousel-top-best-seller',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, RouterModule],
  templateUrl: './carousel-top-best-seller.component.html',
  styleUrls: ['./carousel-top-best-seller.component.scss']
})
export class CarouselTopBestSellerComponent {
  @Input() path: String = ''
  @Input() bestSeller: IProduct[] = []

}
