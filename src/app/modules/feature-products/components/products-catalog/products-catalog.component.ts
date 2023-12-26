import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { CatalogHeaderComponent } from './catalog-header/catalog-header.component';
import { CatalogPaginationComponent } from './catalog-pagination/catalog-pagination.component';
import { IProduct } from 'src/app/shared/models/IProduct.interface';
import { ProductsByRoutesService } from 'src/app/shared/services/products-by-routes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'marketplace-products-catalog',
  standalone: true,
  imports: [CommonModule, ItemDetailComponent, CatalogHeaderComponent, CatalogPaginationComponent],
  templateUrl: './products-catalog.component.html',
  styleUrls: ['./products-catalog.component.scss']
})
export class ProductsCatalogComponent {


  ngOnInit(): void {
    let component = this;
    this._service.getProductsByRoutes(this._activateRoute).subscribe({
      next(value) {
        console.log(value);
        value.sort((a, b) => b.views - a.views)
        component.products = value
      },
    })

  }

  private _activateRoute = inject(ActivatedRoute)
  private _service = inject(ProductsByRoutesService)
  products: IProduct[] = []


}
