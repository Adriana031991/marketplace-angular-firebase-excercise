import { Injectable, computed, inject, signal } from '@angular/core';
import { ICategory, ICategoryAndSubcategory } from 'src/app/shared/models/ICategory.interface';
import { IProduct } from 'src/app/shared/models/IProduct.interface';
import { CollectionsFbService } from 'src/app/shared/services/collections-fb.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  firebaseCollectionService = inject(CollectionsFbService);
  productsData = signal<IProduct[]>([])
  offerProducts = signal<IProduct[]>([])
  subcategoriesData = signal<ICategoryAndSubcategory[]>([])
  productsFilteredByCategory = signal<IProduct[]>([])

  preload = signal<Boolean>(true);

  preloadOffers = computed(() => (this.getProductsToGallery().length === 0) ? true : false)
  preloadCategories = computed(() => (this.getCategories().length === 0) ? true : false)



  indexProductToGetLimitedProducts = computed(() => {
    let productsKey = this.firebaseCollectionService.productsKey()
    let indexProduct = Math.floor(Math.random() * (productsKey.length - 5))
    return productsKey[indexProduct]
  })

  getSampleProductsLimited = computed(() => {
    this.firebaseCollectionService.getProductsWithStartAtAndLimitData$('Salud', 5).subscribe({
      next: data => {
        data.map(res => {
          this.productsData.update((state) => [...state, res[1]])
          this.preload.set(false)
        })
        // console.log(data);

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
      // TODO: PENDIENTE QUITAR EL STRING DE LA CONST TODAY PARA QUE TOME LA FECHA ACTUAL
      const today = new Date('2020-06-29')

      console.log(res);

      if (res) {

        // res.offer = JSON.parse(res.offer);
        // res.gallery = JSON.parse(res.gallery);

        if (regEx.test(res.offer[2])) {
          let offerDate = new Date(
            parseInt(res.offer[2].split('-')[0]),
            parseInt(res.offer[2].split('-')[1]) - 1,
            parseInt(res.offer[2].split('-')[2]),
          )

          if (today < offerDate && res.stock > 0) {
            offerProducts = [...offerProducts, res]
          }
        }
      }
    })
    console.log(offerProducts);

    return offerProducts
  })

  getCategories = computed(() => {
    let categories: ICategory[] = []
    this.firebaseCollectionService.categories().map((category, index) => {
      if (index > 6) {
        categories = []
      }
      categories = [...categories, category]
    })
    return categories.sort((a: ICategory, b: ICategory) => b.view - a.view)
  })

  getSubCategories(orderBy: string, subCategory: string) {
    this.firebaseCollectionService.filterSubCategory$(orderBy, subCategory).subscribe({
      next: value => {
        value.map(data => {
          let newData = {
            "category": data.category,
            "subCategory": data.name,
            "url": data.url
          }
          this.subcategoriesData.update((state) => [...state, newData])
        })
      },
      error: err => {
        console.log(err);
      }
    })
  }

  getFilterAndLimitedProductsByCategory(orderBy: string, subCategory: string, limitToFirst: Number) {
    this.firebaseCollectionService.getProductsFilterandLimited$(orderBy, subCategory, limitToFirst).subscribe({
      next: value => {
        // console.log(value);
        this.productsFilteredByCategory.update((state) => [...state, ...value])
      },
      error: err => {
        console.log(err);
      }
    })
  }


}
