import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/IProduct.interface';
import { switchMap, tap } from 'rxjs';
import { FilterParameters } from 'src/app/shared/models/FilterParameters.enum';
import { ProductsService } from '../../services/products.service';
import { ProductsByRoutesService } from 'src/app/shared/services/products-by-routes.service';

@Component({
  selector: 'marketplace-products-recomended',
  standalone: true,
  imports: [CommonModule, ItemDetailComponent],
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
        component.products = value
      },
    })

  }

  private _activateRoute = inject(ActivatedRoute)
  private _service = inject(ProductsByRoutesService)
  products: IProduct[] = []

}
