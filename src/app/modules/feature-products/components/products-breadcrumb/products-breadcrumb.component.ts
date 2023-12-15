import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { FilterParameters } from 'src/app/shared/models/FilterParameters.enum';
import { first, switchMap, tap } from 'rxjs';

@Component({
  selector: 'marketplace-products-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-breadcrumb.component.html',
  styleUrls: ['./products-breadcrumb.component.scss']
})

export class ProductsBreadcrumbComponent implements OnInit {
  private _activateRoute = inject(ActivatedRoute)
  private _service = inject(ProductsService)
  breadcrumb: string = ''

  ngOnInit(): void {
    let parameter = '';
    let component = this;
    this._activateRoute.params
      .pipe(
        tap(data => parameter = data['param']),
        switchMap(({ param }) =>

          component._service.getCategoryName$(FilterParameters.FilterByurl, param)

        ),
      )
      .subscribe({
        next(value) {

          (value) ?
            component.breadcrumb = value
            :
            component._service.getSubCategoryName$(FilterParameters.FilterByurl, parameter).subscribe({
              next(name) {
                component.breadcrumb = name
              }
            })

        },
      })

  }



}