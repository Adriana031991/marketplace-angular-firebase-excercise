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
  offerProducts = signal<IProduct[]>([])
  // stockProducts = signal<IProduct[]>([])
  preload = signal<Boolean>(true);

  preloadOffers = computed(() => (this.getProductsToGallery().length === 0) ? false : true)

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
          this.preload.set(false)
        })
      },
      error: err => {
        console.log(err);
      }
    })
  })

  getProductsToGallery = computed(() => {
    let offerProducts: IProduct[] = []

    this.firebaseCollectionService.productsValue().map(res => {
      const regEx = /^(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/
      const today = new Date('2020-06-29')
      res.offer = JSON.parse(res.offer);

      if (regEx.test(res.offer[2])) {
        let offerDate = new Date(
          parseInt(res.offer[2].split('-')[0]),
          parseInt(res.offer[2].split('-')[1]) - 1,
          parseInt(res.offer[2].split('-')[2]),
        )

        if (today < offerDate && res.stock > 0) {
          offerProducts = [...offerProducts, res]
          // this.preload.set(false)

        }
      }
    })
    return offerProducts
  })
}
