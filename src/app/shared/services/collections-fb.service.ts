import { HttpClient } from '@angular/common/http';
import { Injectable, Injector, effect } from '@angular/core';
import { api_path } from 'src/environment/config';
import { IProduct } from '../models/IProduct.interface';
import { Observable, map } from 'rxjs';
import { tap } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { ICategory } from '../models/ICategory.interface';
import { ISubCategory } from '../models/ISubCategory.interface';

@Injectable({
  providedIn: 'root'
})
export class CollectionsFbService {

  private _url = api_path.url;

  private products$: Observable<IProduct[]> = this._http.get<IProduct[]>(`${this._url}/products.json`)
  // .pipe(map((data) => {
  //   return Object.values(data)
  // }))
  public products = toSignal<IProduct[], IProduct[]>(this.products$, { injector: this._injector, initialValue: [] })

  public categories = toSignal<ICategory[], ICategory[]>(this._http.get<ICategory[]>(`${this._url}/categories.json`)
    .pipe(map(res => Object.values(res))), { injector: this._injector, initialValue: [] })


  public filter$(orderBy: string, subCategory: string): Observable<ISubCategory[]> {
    return this._http.get<ISubCategory[]>(`${this._url}/sub-categories.json?orderBy="${orderBy}"&equalTo="${subCategory}"&print=pretty`)
      .pipe(
        map(res => {
          return Object.values(res)
        })
      )
  }


  // public disputes = toSignal<IDispute[]>(this._http.get<IDispute[]>(`${this._url}disputes`), { injector: this._injector })
  // public messages = toSignal<IMessage[]>(this._http.get<IMessage[]>(`${this._url}messages`), { injector: this._injector })
  // public orders = toSignal<IOrder[]>(this._http.get<IOrder[]>(`${this._url}orders`), { injector: this._injector })
  // public sales = toSignal<ISale[]>(this._http.get<ISale[]>(`${this._url}sales`), { injector: this._injector })
  // public stores = toSignal<IStore[]>(this._http.get<IStore[]>(`${this._url}stores`), { injector: this._injector })
  // public subcategories = toSignal<ISubCategory[]>(this._http.get<ISubCategory[]>(`${this._url}sub-categories`), { injector: this._injector })
  // public users = toSignal<IUser[]>(this._http.get<IUser[]>(`${this._url}users`), { injector: this._injector })

  // public products = toSignal<IProduct[]>(this.http.get<IProduct[]>('https://fakestoreapi.com/products'));
  // public products$ = toObservable(this.products);
  constructor(private _http: HttpClient, private _injector: Injector) {


  }


}
