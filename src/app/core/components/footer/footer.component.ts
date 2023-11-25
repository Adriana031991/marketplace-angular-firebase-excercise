import { Component, Signal, computed, inject } from '@angular/core';
import { first } from 'rxjs';
import { FilterParameters } from 'src/app/shared/models/FilterParameters.enum';
import { ICategory, ICategoryAndSubcategory } from 'src/app/shared/models/ICategory.interface';
import { CollectionsFbService } from 'src/app/shared/services/collections-fb.service';
import { imagen_path } from 'src/environment/config';

@Component({
  selector: 'marketplace-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {


  categories: Signal<ICategory[]> = inject(CollectionsFbService).categories
  service = inject(CollectionsFbService)
  render: boolean = true
  newArraySubCategories: ICategoryAndSubcategory[] = [];

  subCategory = computed(() => {
    return this.categories().map(value => {
      return value.name;
    })
  })


  callback() {
    if (this.render) {
      this.render = false;
      this.subCategory().forEach(listOfTitle => {
        this.service.filterSubCategory$(FilterParameters.FilterByCategory, listOfTitle).pipe(first()).subscribe({
          next: arraySubCategories => {
            arraySubCategories.map((res) => {
              let data = {
                "category": res.category,
                "subCategory": res.name,
                "url": res.url,
              }
              this.newArraySubCategories = [...this.newArraySubCategories, data]
            })
          }
        })
      })
    }
  }


}
