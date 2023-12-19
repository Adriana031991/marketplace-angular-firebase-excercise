import { CommonModule } from '@angular/common';
import { Component, Signal, computed, effect, inject } from '@angular/core';
import { IProduct } from 'src/app/shared/models/IProduct.interface';
import { CollectionsFbService } from 'src/app/shared/services/collections-fb.service';
import { imagen_path } from 'src/environment/config';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'marketplace-header-promotion',
  templateUrl: './header-promotion.component.html',
  styleUrls: ['./header-promotion.component.scss'],
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, RouterModule]
})
export class HeaderPromotionComponent {


  productos: Signal<IProduct[]> = inject(CollectionsFbService).productsValue;
  dataProducts = computed(() => {
    let data: IProduct[] = [];
    this.productos().map((res) => {
      // res.top_banner = Object.entries(JSON.parse(res.top_banner)) as any
      if (res.category == 'Salud-Belleza') {
        data = [...data, res]
      }
    });
    return data;
  })


}
