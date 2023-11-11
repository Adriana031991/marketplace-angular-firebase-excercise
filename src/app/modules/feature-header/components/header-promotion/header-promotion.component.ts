import { CommonModule } from '@angular/common';
import { Component, Signal, computed, effect, inject } from '@angular/core';
import { IProduct } from 'src/app/shared/models/IProduct.interface';
import { CollectionsFbService } from 'src/app/shared/services/collections-fb.service';
import { imagen_path } from 'src/environment/config';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'marketplace-header-promotion',
  templateUrl: './header-promotion.component.html',
  styleUrls: ['./header-promotion.component.scss'],
  standalone: true,
  imports: [CommonModule, NgbCarouselModule]
})
export class HeaderPromotionComponent {

  path: String = imagen_path.url
  productos: Signal<IProduct[]> = inject(CollectionsFbService).products;
  dataProducts = computed(() => {
    return this.productos().map((res) => {
      res.top_banner = Object.entries(JSON.parse(res.top_banner)) as any
      return res
    });
  })


}
