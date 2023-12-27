import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailGridViewComponent } from '../item-detail/item-detail.component';
import { CatalogHeaderComponent } from './catalog-header/catalog-header.component';
import { CatalogPaginationComponent } from './catalog-pagination/catalog-pagination.component';
import { IProduct } from 'src/app/shared/models/IProduct.interface';
import { ProductsByRoutesService } from 'src/app/shared/services/products-by-routes.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ItemDetailListViewComponent } from '../item-detail-list-view/item-detail-list-view.component';

@Component({
  selector: 'marketplace-products-catalog',
  standalone: true,
  imports: [CommonModule, ItemDetailGridViewComponent, CatalogHeaderComponent, CatalogPaginationComponent, ItemDetailListViewComponent],
  templateUrl: './products-catalog.component.html',
  styleUrls: ['./products-catalog.component.scss']
})
export class ProductsCatalogComponent {


  ngOnInit(): void {
    let component = this;
    this._service.getProductsByRoutes(this._activateRoute).subscribe({
      next(value) {
        // console.log(value);
        // value.sort((a, b) => b.views - a.views)
        value.map(data => {
          if (data.stock > 0) {
            // component.products = [...component.products, data]
            component.products.update(store => [...store, data])
            component.products.update(store => [...store, data])
            component.products.update(store => [...store, data])
            component.products.update(store => [...store, data])
            component.products.update(store => [...store, data])
            component.products.update(store => [...store, data])
            component.products.update(store => [...store, data])
            component.products.update(store => [...store, data])
            component.products.update(store => [...store, data])
            component.products.update(store => [...store, data])
          }
        }
        )

      },
    })


  }


  private _activateRoute = inject(ActivatedRoute)
  private _service = inject(ProductsByRoutesService)
  products = signal<IProduct[]>([])

  viewOfTap: number = 1;

  changeView(event: number) {
    this.viewOfTap = event
  }

}
