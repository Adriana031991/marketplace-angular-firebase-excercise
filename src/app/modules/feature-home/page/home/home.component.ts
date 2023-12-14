import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductListComponent } from '../../components/home-products/product-list.component';
import { HomeDealHotTodayComponent } from '../../components/home-deal-hot-today/home-deal-hot-today.component';
import { HomePromotionsComponent } from '../../components/home-promotions/home-promotions.component';
import { HomeCaracteristicsComponent } from '../../components/home-caracteristics/home-caracteristics.component';
import { HomeBannerComponent } from '../../components/home-banner/home-banner.component';

@Component({
  selector: 'marketplace-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule,
    HomeBannerComponent,
    HomeCaracteristicsComponent,
    HomePromotionsComponent,
    HomeDealHotTodayComponent,
    ProductListComponent]
})
export class HomeComponent {


}
