
import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { imagen_path } from 'src/environment/config';
import { HomeService } from '../../services/home.service';
import { FilterParameters } from 'src/app/shared/models/FilterParameters.enum';
import { RouterModule } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { IProduct } from 'src/app/shared/models/IProduct.interface';

@Component({
  selector: 'marketplace-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbRatingModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  service = inject(HomeService)
  categories = this.service.getCategories
  preload = this.service.preloadCategories()
  subcategories = this.service.subcategoriesData
  productsFilteredByCategory = this.service.productsFilteredByCategory

  rating: number = 0;


  dataSubcategories = computed(() => {
    this.categories().map(category => {
      this.service.getSubCategories(FilterParameters.FilterByCategory, category.name)
      this.service.getFilterAndLimitedProductsByCategory(FilterParameters.FilterByCategory, category.url, 6)

    })
  })

  constructor() {
    effect(() => this.dataSubcategories())
  }

  offer = computed(() => {
    let offer: number = 0;
    this.productsFilteredByCategory().map(data => {

      this.getRatingData(data);

      if (data.offer[0] == 'Disccount') {
        offer = Math.floor(data.price - (data.price * parseInt(data.offer[1]) / 100))
      }
      if (data.offer[0] == 'Fixed') {
        offer = parseInt(data.offer[1])
      }

    })
    return offer
  })


  private getRatingData(data: IProduct) {

    let reviewsLength = Array.from(data.reviews).length;
    let totalReviews = Array.from(data.reviews).reduce((accumulator: number, currentValue: any) => {
      return accumulator + currentValue.review;
    }, 0);

    this.rating = Math.round(totalReviews / reviewsLength);

  }
}
