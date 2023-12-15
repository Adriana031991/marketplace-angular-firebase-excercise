import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { first, switchMap, tap } from 'rxjs';
import { FilterParameters } from 'src/app/shared/models/FilterParameters.enum';
import { IProduct } from 'src/app/shared/models/IProduct.interface';

@Component({
  selector: 'marketplace-item-detail',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemDetailComponent implements OnInit {

  private _activateRoute = inject(ActivatedRoute)
  private _service = inject(ProductsService)
  products: IProduct[] = []


  ngOnInit(): void {
    let parameter = '';
    let component = this;
    this._activateRoute.params
      .pipe(
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
                console.log(data);
                component.products = [...component.products, ...data]
                data.map(r => console.log(r.sales)
                )
                console.log(component.products);
              },
            })

          }
          else {
            component.products = [...component.products, ...value]
            // component.products = value
          }
          console.log(component.products);

        },
      })

  }



}
