import { Component, Input, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from 'src/app/shared/models/IProduct.interface';
import { CollectionsFbService } from 'src/app/shared/services/collections-fb.service';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'marketplace-home-banner',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, RouterModule],
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent {

  @Input() path: String = ''
  service = inject(CollectionsFbService);
  sampleProductData = signal<IProduct[]>([])

  sampleProduct = computed(() => {
    let sample = Math.floor(Math.random() * (this.service.productsKey().length - 5))
    return this.service.productsKey()[sample]
  })


  sampleProductLimit = computed(() => {
    this.service.productsLimitData$(this.sampleProduct(), 5).pipe(first()).subscribe({
      next: data => {
        data.map(res => {
          res[1].horizontal_slider = Object.entries(JSON.parse(res[1].horizontal_slider)) as any
          this.sampleProductData.update((state) => [...state, res[1]])
        })
      },
      error: err => {
        console.log(err);
      }
    })
  })



}
