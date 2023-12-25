import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { api_path } from 'src/environment/config';
import { IProduct } from '../models/IProduct.interface';
import { Observable, map, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ICategory } from '../models/ICategory.interface';
import { ISubCategory } from '../models/ISubCategory.interface';

@Injectable({
  providedIn: 'root'
})
export class CollectionsFbService {

  private _url = api_path.url;

  /*=====================================
  Products
  ======================================*/

  private productsValue$: Observable<IProduct[]> = this._http.get<IProduct[]>(`${this._url}/products.json`)
    .pipe(map((data) => {
      let res = Object.values(data)
      res.map(r => {
        r.horizontal_slider = Object.entries(JSON.parse(r.horizontal_slider)) as any
        r.gallery = JSON.parse(r.gallery)
        r.reviews = JSON.parse(r.reviews)
        r.summary = JSON.parse(r.summary)
        // r.specification = JSON.parse(r.specification)
        r.details = JSON.parse(r.details)
        r.tags = JSON.parse(r.tags)
        r.top_banner = Object.entries(JSON.parse(r.top_banner)) as any


        return r
      })
      console.log(res);

      return res;
    }))

  private productsKey$: Observable<String[]> = this._http.get<String[]>(`${this._url}/products.json`)
    .pipe(map((data) => {
      return Object.keys(data)
    }))

  public getProductsFiltered$(orderBy: string, subCategory: string): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`${this._url}/products.json?orderBy="${orderBy}"&equalTo="${subCategory}"&print=pretty`)
      .pipe(
        map(data => {
          let res = Object.values(data)
          res.map(r => {
            r.horizontal_slider = Object.entries(JSON.parse(r.horizontal_slider)) as any
            r.offer = JSON.parse(r.offer)
            r.gallery = JSON.parse(r.gallery)
            r.reviews = JSON.parse(r.reviews)
            // r.specification = JSON.parse(r.specification)
            r.details = JSON.parse(r.details)
            r.tags = JSON.parse(r.tags)
            r.top_banner = Object.entries(JSON.parse(r.top_banner)) as any


            return r
          })
          console.log(res);

          return res;
        })
      )
  }
  public getProductsFilterandLimited$(orderBy: string, subCategory: string, limitToFirst: Number): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`${this._url}/products.json?orderBy="${orderBy}"&equalTo="${subCategory}"&limitToFirst=${limitToFirst}&print=pretty`)
      .pipe(
        map(data => {
          let res = Object.values(data)
          res.map(r => {
            r.horizontal_slider = Object.entries(JSON.parse(r.horizontal_slider)) as any
            r.offer = JSON.parse(r.offer)
            r.gallery = JSON.parse(r.gallery)
            r.reviews = JSON.parse(r.reviews)
            r.specification = JSON.parse(r.specification)
            r.details = JSON.parse(r.details)
            r.tags = JSON.parse(r.tags)
            r.top_banner = Object.entries(JSON.parse(r.top_banner)) as any
            r.video = JSON.parse(r.video)
            r.summary = JSON.parse(r.summary)
            return r
          })
          console.log(res);
          return res;
        })
      )
  }

  public getProductsWithStartAtAndLimitData$(startAt: String, limitToFirst: Number): Observable<[string, IProduct][]> {
    return this._http.get<IProduct[]>(`${this._url}/products.json?orderBy="category"&startAt="${startAt}"&limitToFirst=${limitToFirst}&printy=pretty`)
      .pipe(
        map((data) => {
          let res = Object.entries(data)
          console.log(res);
          res.map(r => {
            r[1].horizontal_slider = Object.entries(JSON.parse(r[1].horizontal_slider)) as any
            r[1].offer = JSON.parse(r[1].offer)
            r[1].gallery = JSON.parse(r[1].gallery)
            r[1].reviews = JSON.parse(r[1].reviews)
            r[1].specification = JSON.parse(r[1].specification)
            r[1].details = JSON.parse(r[1].details)
            r[1].tags = JSON.parse(r[1].tags)
            r[1].video = JSON.parse(r[1].video)
            r[1].summary = JSON.parse(r[1].summary)
            r[1].top_banner = Object.entries(JSON.parse(r[1].top_banner)) as any

            return r
          })
          console.log(res);
          return res;
        })
      )
  }

  public productsValue = toSignal<IProduct[], IProduct[]>(this.productsValue$, { injector: this._injector, initialValue: [] })
  public productsKey = toSignal<String[], String[]>(this.productsKey$, { injector: this._injector, initialValue: [] })



  /*=====================================
  Categories
  ======================================*/

  public categories = toSignal<ICategory[], ICategory[]>(this._http.get<ICategory[]>(`${this._url}/categories.json`)
    .pipe(map(res => {
      let data = Object.values(res)
      data.map(r => {
        r.title_list = JSON.parse(r.title_list)

      })
      return data
    })), { injector: this._injector, initialValue: [] })


  public getCategoriesFiltered$(orderBy: string, equalTo: string): Observable<ICategory[]> {
    return this._http.get<ICategory[]>(`${this._url}/categories.json?orderBy="${orderBy}"&equalTo="${equalTo}"&print=pretty`)
      .pipe(
        map(res => {
          let data = Object.values(res)
          data.map(r => {
            r.title_list = JSON.parse(r.title_list)
          })
          return data
        })
      )
  }
  /*=====================================
  Sub-Categories
  ======================================*/


  public filterSubCategory$(orderBy: string, subCategory: string): Observable<ISubCategory[]> {
    return this._http.get<ISubCategory[]>(`${this._url}/sub-categories.json?orderBy="${orderBy}"&equalTo="${subCategory}"&print=pretty`)
      .pipe(
        map(res => {
          return Object.values(res)
        })
      )
  }


  // public subcategories = toSignal<ISubCategory[]>(this._http.get<ISubCategory[]>(`${this._url}/sub-categories.json`)
  //   .pipe(map(res => Object.values(res))), { injector: this._injector })


  // public disputes = toSignal<IDispute[]>(this._http.get<IDispute[]>(`${this._url}disputes`), { injector: this._injector })
  // public messages = toSignal<IMessage[]>(this._http.get<IMessage[]>(`${this._url}messages`), { injector: this._injector })
  // public orders = toSignal<IOrder[]>(this._http.get<IOrder[]>(`${this._url}orders`), { injector: this._injector })
  // public sales = toSignal<ISale[]>(this._http.get<ISale[]>(`${this._url}sales`), { injector: this._injector })
  // public stores = toSignal<IStore[]>(this._http.get<IStore[]>(`${this._url}stores`), { injector: this._injector })
  // public users = toSignal<IUser[]>(this._http.get<IUser[]>(`${this._url}users`), { injector: this._injector })

  // public products = toSignal<IProduct[]>(this.http.get<IProduct[]>('https://fakestoreapi.com/products'));
  // public products$ = toObservable(this.products);
  constructor(private _http: HttpClient, private _injector: Injector) {


  }


}
