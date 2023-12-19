import { Injectable, Injector, inject } from '@angular/core';
import { EMPTY, Observable, catchError, map, of, retry, tap } from 'rxjs';
import { CollectionsFbService } from 'src/app/shared/services/collections-fb.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _firebaseCollectionService = inject(CollectionsFbService)
  // private _injector = inject(Injector)

  getCategories = this._firebaseCollectionService.categories



  getCategoryName$(orderBy: string, equalTo: string): Observable<string> {
    return this._firebaseCollectionService.getCategoriesFiltered$(orderBy, equalTo).pipe(
      map(categories => {
        return categories.find(res => res.url == equalTo)?.name as string

      }),
      catchError(error => {
        console.error('Error:', error);
        return EMPTY;
      })
    );
  }

  // public getCategoryName = (orderBy: string, equalTo: string) => toSignal<String, String>(this.getCategoryName$(orderBy, equalTo), { injector: this._injector, initialValue: '' })
  // public getSubCategoryName = (orderBy: string, equalTo: string) => toSignal<String, String>(this.getSubCategoryName$(orderBy, equalTo), { injector: this._injector, initialValue: '' })



  getSubCategoryName$(orderBy: string, equalTo: string): Observable<string> {
    return this._firebaseCollectionService.filterSubCategory$(orderBy, equalTo).pipe(
      map(subcategories => {
        return subcategories.find(res => res.url == equalTo)?.name as string

      }),
      catchError(error => {
        console.error('Error:', error);
        return EMPTY;
      })
    );
  }

  getProductsFiltered$(orderBy: string, equalTo: string) {
    return this._firebaseCollectionService.getProductsFiltered$(orderBy, equalTo).pipe(
      tap(
        // res => console.log(res)

      ),
      map(res => {
        return res.sort((a, b) => b.sales - a.sales).slice(0, 10)
      })
    )
  }

}
