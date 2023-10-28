import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MarketplaceComponent } from './marketplace.component';
import { HeaderMobileComponent } from 'src/app/modules/feature-header/components/header-mobile/header-mobile.component';
import { HeaderPromotionComponent } from 'src/app/modules/feature-header/components/header-promotion/header-promotion.component';
import { NewletterComponent } from 'src/app/modules/feature-newletter/components/newletter/newletter.component';
import { HeaderStandardComponent } from 'src/app/modules/feature-header/components/header-standard/header-standard.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MarketplaceComponent
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule,
    HeaderMobileComponent,
    HeaderPromotionComponent,
    NewletterComponent,
    HeaderStandardComponent,
  ]
})
export class MarketplaceModule { }
