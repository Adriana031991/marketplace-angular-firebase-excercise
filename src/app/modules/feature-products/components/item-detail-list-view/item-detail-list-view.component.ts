import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersComponent } from 'src/app/shared/components/offers/offers.component';
import { RatingComponent } from 'src/app/shared/components/rating/rating.component';
import { RouterModule } from '@angular/router';
import { IProduct } from 'src/app/shared/models/IProduct.interface';

@Component({
  selector: 'marketplace-item-detail-list-view',
  standalone: true,
  imports: [CommonModule, RouterModule, RatingComponent, OffersComponent],
  templateUrl: './item-detail-list-view.component.html',
  styleUrls: ['./item-detail-list-view.component.scss']
})
export class ItemDetailListViewComponent {
  @Input() products: IProduct[] = []
  // summary = this.products.map(data => {
  //   data.summary
  // })
  // OnInit() {

  // }

}
