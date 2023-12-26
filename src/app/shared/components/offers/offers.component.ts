import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, type OnInit } from '@angular/core';
import { IProduct } from '../../models/IProduct.interface';

@Component({
  selector: 'marketplace-offers',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OffersComponent implements OnInit {

  @Input() product!: IProduct;
  offer: number = 0;
  disccount: number = 0;


  ngOnInit(): void {

    console.log(this.product);
    // this.product.offer = '0'
    if (this.product?.offer[0] == 'Disccount') {
      this.offer = Math.floor(this.product?.price - (this.product?.price * parseInt(this.product?.offer[1]) / 100))
      this.disccount = parseInt(this.product?.offer[1])
    }

    if (this.product?.offer[0] == 'Fixed') {
      this.offer = parseInt(this.product?.offer[1])
      this.disccount = Math.round(this.offer * 100 / this.product.price)
    }

  }

}
