import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailGridViewComponent } from '../item-detail/item-detail.component';
import { CatalogHeaderComponent } from './catalog-header/catalog-header.component';
import { CatalogPaginationComponent } from './catalog-pagination/catalog-pagination.component';
import { IProduct } from 'src/app/shared/models/IProduct.interface';
import { ProductsByRoutesService } from 'src/app/shared/services/products-by-routes.service';
import { ActivatedRoute } from '@angular/router';
import { ItemDetailListViewComponent } from '../item-detail-list-view/item-detail-list-view.component';
import { FilterProductsToPaginationPipe } from '../../pipes/filterProductsToPagination.pipe';

@Component({
  selector: 'marketplace-products-catalog',
  standalone: true,
  imports: [CommonModule, ItemDetailGridViewComponent, CatalogHeaderComponent, CatalogPaginationComponent, ItemDetailListViewComponent, FilterProductsToPaginationPipe],
  templateUrl: './products-catalog.component.html',
  styleUrls: ['./products-catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,

})
export class ProductsCatalogComponent {


  ngOnInit(): void {
    let component = this;
    this._service.getProductsByRoutes(this._activateRoute).subscribe({
      next(value) {
        const duplicate = Array(50).fill(null).map(() => value.map(obj => ({ ...obj }))).flat();
        duplicate.map(r => {

          r.name = Math.floor(Math.random() * (50 - 1) + 1).toString()
        })
        duplicate.map(data => {
          if (data.stock > 0) {

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
  currentPage: number = 1;

  changeView(event: number) {
    this.viewOfTap = event
  }

  pageChanged(event: number) {
    this.currentPage = event
  }


}
