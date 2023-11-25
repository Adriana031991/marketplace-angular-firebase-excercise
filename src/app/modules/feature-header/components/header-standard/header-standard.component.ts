import { imagen_path } from './../../../../../environment/config';
import { CommonModule } from '@angular/common';
import { Component, Signal, computed, effect, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ICategory, ICategoryAndSubcategory } from 'src/app/shared/models/ICategory.interface';
import { FilterParameters } from 'src/app/shared/models/FilterParameters.enum';
import { CollectionsFbService } from 'src/app/shared/services/collections-fb.service';
import { first } from 'rxjs';

@Component({
  selector: 'marketplace-header-standard',
  templateUrl: './header-standard.component.html',
  styleUrls: ['./header-standard.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HeaderStandardComponent {


  categories: Signal<ICategory[]> = inject(CollectionsFbService).categories
  service = inject(CollectionsFbService)
  render: boolean = true
  arrayTitleName: ICategoryAndSubcategory[] = [];


  categoryNames: Signal<string[]> = computed(() => {
    return this.categories().map(value => {
      return JSON.parse(value.title_list)
    })
  })

  subCategory = computed(() => {
    return this.categories().map(value => {
      return JSON.parse(value.title_list).map((element: any) => element) as String;

    })
  })

  /**
   * 
  funcion callback para re-renderizar el html y que funcione los plugins de la plantilla
  */

  callback() {

    if (this.render) {
      this.render = false;
      this.subCategory().forEach(listOfTitle => {
        for (const index in listOfTitle) {

          this.service.filterSubCategory$(FilterParameters.FilterByTitleList, listOfTitle[index]).pipe(first()).subscribe({
            next: arraySubCategories => {
              arraySubCategories.map((res, i) => {
                let data = {
                  "titleList": res.title_list,
                  "subCategory": res.name,
                  "url": res.url,
                }
                this.arrayTitleName = [...this.arrayTitleName, data]
              })
            }
          })
        }
      })
    }
  }



}
