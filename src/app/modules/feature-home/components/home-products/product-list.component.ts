
import { Component, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';
import { FilterParameters } from 'src/app/shared/models/FilterParameters.enum';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { IProduct } from 'src/app/shared/models/IProduct.interface';
import { RatingComponent } from 'src/app/shared/components/rating/rating.component';

@Component({
  selector: 'marketplace-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, RatingComponent, NgbRatingModule, NgbCarouselModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  service = inject(HomeService)
  categories = this.service.getCategories
  preload = this.service.preloadCategories()
  subcategories = this.service.subcategoriesData
  productsFilteredByCategory = this.service.productsFilteredByCategory
  healtAndBeautyProducts = this.service.productsData



  dataSubcategories = computed(() => {
    this.categories().map(category => {
      this.service.getSubCategories(FilterParameters.FilterByCategory, category.name)
      this.service.getFilterAndLimitedProductsByCategory(FilterParameters.FilterByCategory, category.url, 6)

    })
  })

  constructor() {
    effect(() => {
      this.dataSubcategories()
      this.service.getSampleProductsLimited()

    })
  }

  offer = computed(() => {
    let offer: number = 0;
    this.productsFilteredByCategory().map(data => {


      if (data.offer[0] == 'Disccount') {
        offer = Math.floor(data.price - (data.price * parseInt(data.offer[1]) / 100))
      }
      if (data.offer[0] == 'Fixed') {
        offer = parseInt(data.offer[1])
      }

    })
    return offer
  })



}
