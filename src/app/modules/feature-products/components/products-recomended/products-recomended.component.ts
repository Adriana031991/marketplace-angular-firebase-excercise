import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailGridViewComponent } from '../item-detail/item-detail.component';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/IProduct.interface';
import { switchMap, tap } from 'rxjs';
import { FilterParameters } from 'src/app/shared/models/FilterParameters.enum';
import { ProductsService } from '../../services/products.service';
import { ProductsByRoutesService } from 'src/app/shared/services/products-by-routes.service';

@Component({
  selector: 'marketplace-products-recomended',
  standalone: true,
  imports: [CommonModule, ItemDetailGridViewComponent],
  templateUrl: './products-recomended.component.html',
  styleUrls: ['./products-recomended.component.scss']
})
export class ProductsRecomendedComponent implements OnInit {


  ngOnInit(): void {
    let component = this;
    this._service.getProductsByRoutes(this._activateRoute).subscribe({
      next(value) {
        // console.log(value);
        value.sort((a, b) => b.views - a.views)
        value.map(data => {
          if (data.stock > 0) {
            component.products = [...component.products, data]
          }
        }
        )
      },
    })

  }

  private _activateRoute = inject(ActivatedRoute)
  private _service = inject(ProductsByRoutesService)
  products: IProduct[] = []

}
