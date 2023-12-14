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
  activateRoute = inject(ActivatedRoute)
  private _service = inject(ProductsService)
  breadcrumb: string = ''

  ngOnInit(): void {
    let component = this;
    this.activateRoute.params
      .pipe(
        tap((value) => console.log(value)
        ),
        switchMap(({ param }) =>

          // component._service.getCategoryName$(FilterParameters.FilterByurl, param)
          component._service.getSubCategoryName$(FilterParameters.FilterByurl, param)

        ),
        first()
      )
      .subscribe({
        next(value) {

          component.breadcrumb = value
        },
      })

  }



}