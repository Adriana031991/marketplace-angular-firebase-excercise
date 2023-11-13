import { Component, Input, Signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from 'src/app/shared/models/IProduct.interface';
import { CollectionsFbService } from 'src/app/shared/services/collections-fb.service';

@Component({
  selector: 'marketplace-home-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent {

  @Input() path: String = ''
  service = inject(CollectionsFbService);
  sampleProduct = computed(() => {
    let sample = Math.floor(Math.random() * (this.service.products().length - 5))
    console.log(this.service.products()[sample]);
    console.log(sample);

    return this.service.products()[sample]

  })
  sampleProductLimit = computed(() => {
    let a;
    this.service.productsLimitData$('-M4pCGMVNNgxTXe0xo34', 5).subscribe({
      next: data => {
        a = data
        console.log(data);

      },
      error: err => {
        console.log(err);

      }
    })
    console.log(a);

    return a


  })


}
