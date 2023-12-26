
import { Component, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';
import { FilterParameters } from 'src/app/shared/models/FilterParameters.enum';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from 'src/app/shared/components/rating/rating.component';
import { OffersComponent } from 'src/app/shared/components/offers/offers.component';

@Component({
  selector: 'marketplace-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, RatingComponent, OffersComponent, NgbCarouselModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  service = inject(HomeService)
  categories = this.service.getCategories
  // preload = this.service.preloadCategories()
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

}
