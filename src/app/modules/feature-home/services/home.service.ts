import { Injectable, computed, inject, signal } from '@angular/core';
import { first } from 'rxjs';
import { IProduct } from 'src/app/shared/models/IProduct.interface';
import { CollectionsFbService } from 'src/app/shared/services/collections-fb.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  firebaseCollectionService = inject(CollectionsFbService);
  homeBannerData = signal<IProduct[]>([])

  indexProduct = computed(() => {
    let productsKey = this.firebaseCollectionService.productsKey()
    let indexProduct = Math.floor(Math.random() * (productsKey.length - 5))
    return productsKey[indexProduct]
  })

  sampleProductLimit = computed(() => {
    this.firebaseCollectionService.productsLimitData$(this.indexProduct(), 5).pipe(first()).subscribe({
      next: data => {
        data.map(res => {
          res[1].horizontal_slider = Object.entries(JSON.parse(res[1].horizontal_slider)) as any
          this.homeBannerData.update((state) => [...state, res[1]])
        })
      },
      error: err => {
        console.log(err);
      }
    })
  })
}
