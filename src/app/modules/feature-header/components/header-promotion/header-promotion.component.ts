import { CommonModule } from '@angular/common';
import { Component, Signal, computed, effect, inject } from '@angular/core';
import { IProduct } from 'src/app/shared/models/IProduct.interface';
import { CollectionsFbService } from 'src/app/shared/services/collections-fb.service';
import { imagen_path } from 'src/environment/config';

@Component({
  selector: 'marketplace-header-promotion',
  templateUrl: './header-promotion.component.html',
  styleUrls: ['./header-promotion.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HeaderPromotionComponent {

  path: String = imagen_path.url
  products: Signal<IProduct[]> = inject(CollectionsFbService).products;


  constructor() {
    effect(() => {

      this.data()

    })
  }

  img_tag: string = ''
  h3_tag: string = '';
  p1_tag: string = '';
  h4_tag: string = '';
  p2_tag: string = '';
  span_tag: string = '';
  button_tag: string = '';

  dataSize = computed(() => this.products()?.length)
  indexRandomBanner = computed(() => Math.floor(Math.random() * (this.dataSize() ? this.dataSize()! : 47)))

  data = computed(() => {
    let data: [string, string][] = Object.entries(JSON.parse(Object.values(this.products()!)[this.indexRandomBanner()].top_banner))
    this.h3_tag = data[0][1]
    this.p1_tag = data[1][1]
    this.h4_tag = data[2][1]
    this.p2_tag = data[3][1]
    this.span_tag = data[4][1]
    this.button_tag = data[5][1]
    this.img_tag = data[6][1];

    return data

  })



}
