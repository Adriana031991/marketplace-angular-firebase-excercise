import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/IProduct.interface';

@Component({
  selector: 'marketplace-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  rating: number = 0;
  stars = [1, 2, 3, 4, 5];
  @Input() product?: IProduct;

  rate(index: number) {
    this.rating = index;
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
    if (this.product) {
      this.getRatingData(this.product);

    }
    console.log(this.rating);
  }

  private getRatingData(data: IProduct) {

    let product = JSON.parse(data.reviews)

    let reviewsLength = product.length;
    let totalReviews = product.reduce((accumulator: number, currentValue: { review: number, comment: string }) => {

      return accumulator + currentValue.review;
    }, 0);

    this.rating = Math.round(totalReviews / reviewsLength);

  }

}
