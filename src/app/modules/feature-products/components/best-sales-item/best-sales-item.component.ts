import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/IProduct.interface';
import { ProductsByRoutesService } from 'src/app/shared/services/products-by-routes.service';

@Component({
  selector: 'marketplace-best-sales-item',
  templateUrl: './best-sales-item.component.html',
  styleUrls: ['./best-sales-item.component.scss'],
  standalone: true,
  imports: [CommonModule, ItemDetailComponent]
})
export class BestSalesItemComponent implements OnInit {

  ngOnInit(): void {
    let component = this;
    this._service.getProductsByRoutes(this._activateRoute).subscribe({
      next(value) {
        // console.log(value);
        value.sort((a, b) => b.sales - a.sales)
        component.products = value
      },
    })

  }

  private _activateRoute = inject(ActivatedRoute)
  private _service = inject(ProductsByRoutesService)
  products: IProduct[] = []


}
