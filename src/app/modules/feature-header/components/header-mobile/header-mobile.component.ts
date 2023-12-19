import { CommonModule } from '@angular/common';
import { Component, Signal, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { first } from 'rxjs';
import { FilterParameters } from 'src/app/shared/models/FilterParameters.enum';
import { ICategory, ICategoryAndSubcategory } from 'src/app/shared/models/ICategory.interface';
import { CollectionsFbService } from 'src/app/shared/services/collections-fb.service';
import { imagen_path } from 'src/environment/config';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'marketplace-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, NgbAccordionModule]
})
export class HeaderMobileComponent {



  categories: Signal<ICategory[]> = inject(CollectionsFbService).categories
  service = inject(CollectionsFbService)
  render: boolean = true
  newArraySubCategories: ICategoryAndSubcategory[] = [];

  subCategory = computed(() => {
    return this.categories().map(value => {
      return value.name;
    })
  })

  isActive = true;
  isOpenMenu = false;

  /**
   * 
  funcion callback para re-renderizar el html y que funcione los plugins de la plantilla
  */

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
