
import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { imagen_path } from 'src/environment/config';
import { HomeService } from '../../services/home.service';
import { FilterParameters } from 'src/app/shared/models/FilterParameters.enum';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'marketplace-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  path: string = imagen_path.url
  service = inject(HomeService)
  categories = this.service.getCategories
  preload = this.service.preloadCategories()
  subcategories = this.service.subcategoriesData
  productsFilteredByCategory = this.service.productsFilteredByCategory

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
    let offer: any
    this.productsFilteredByCategory().map(data => {
      data.offer = JSON.parse(data.offer)
      if (data.offer[0] == 'Disccount') {
        offer = Math.floor(data.price * parseInt(data.offer[1]) / 100)
      }
      if (data.offer[0] == 'Fixed') {
        offer = Math.floor(data.price - parseInt(data.offer[1]))
      }

    })
    return offer
  })

}
