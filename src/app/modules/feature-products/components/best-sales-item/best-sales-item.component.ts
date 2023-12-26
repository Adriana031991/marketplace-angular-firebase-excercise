import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ActivatedRoute } from '@angular/router';
import { tap, switchMap } from 'rxjs';
import { FilterParameters } from 'src/app/shared/models/FilterParameters.enum';
import { IProduct } from 'src/app/shared/models/IProduct.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'marketplace-best-sales-item',
  templateUrl: './best-sales-item.component.html',
  styleUrls: ['./best-sales-item.component.scss'],
  standalone: true,
  imports: [CommonModule, ItemDetailComponent]
})
export class BestSalesItemComponent implements OnInit {

  private _activateRoute = inject(ActivatedRoute)
  private _service = inject(ProductsService)
  products: IProduct[] = []


  ngOnInit(): void {
    let parameter = '';
    let component = this;
    this._activateRoute.params
      .pipe(
        // tap(d => console.log(d)),
        tap((value) => parameter = value['param']),
        switchMap(({ param }) =>

          component._service.getProductsFiltered$(FilterParameters.FilterByCategory, param)

        ),

        // first()
      )
      .subscribe({
        next(value) {
          console.log(value);


          if (value.length == 0) {
            component._service.getProductsFiltered$(FilterParameters.FilterBySubCategory, parameter).subscribe({
              next(data) {
                // component.products = data
                component.products = [...component.products, ...data]
                console.log(component.products);
              },
            })

          }
          else {
            // component.products = value
            component.products = [...component.products, ...value]

          }

        },
      })

  }

}
