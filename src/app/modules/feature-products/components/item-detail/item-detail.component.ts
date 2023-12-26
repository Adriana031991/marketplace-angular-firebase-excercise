import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OffersComponent } from 'src/app/shared/components/offers/offers.component';
import { RatingComponent } from 'src/app/shared/components/rating/rating.component';
import { IProduct } from 'src/app/shared/models/IProduct.interface';

@Component({
  selector: 'marketplace-item-detail',
  standalone: true,
  imports: [
    CommonModule, RouterModule, RatingComponent, OffersComponent
  ],
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemDetailComponent {

  @Input() products: IProduct[] = []

}
