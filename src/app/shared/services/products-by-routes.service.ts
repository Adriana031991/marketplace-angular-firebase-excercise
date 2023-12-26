import { Injectable, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap, switchMap, BehaviorSubject, Observable, of, map } from 'rxjs';
import { FilterParameters } from '../models/FilterParameters.enum';
import { IProduct } from '../models/IProduct.interface';
import { CollectionsFbService } from './collections-fb.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsByRoutesService {

  private _service = inject(CollectionsFbService)
  productsSubject = new BehaviorSubject<IProduct[]>([]);

  getProductsByRoutes(activateRoute: ActivatedRoute): Observable<IProduct[]> {
    let parameter = '';

    return activateRoute.params.pipe(
      // tap(d => console.log(d)),
      tap((value: any) => parameter = value['param']),
      switchMap(({ param }) =>
        this._service.getProductsFiltered$(FilterParameters.FilterByCategory, param).pipe(
          tap(
            // res => console.log(res)
          )
        )
      ),
      map(value => {
        if (value.length == 0) {
          return this._service.getProductsFiltered$(FilterParameters.FilterBySubCategory, parameter)
            .pipe(
              // tap(data => console.log(data)),
              map(data => {
                return [...data];
              })
            );
        } else {
          return of([...value]);
        }
      }),
      switchMap(observable => observable),
    );
  }
}
