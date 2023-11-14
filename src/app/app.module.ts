import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketplaceModule } from './core/components/marketplace.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HandleErrorsInterceptor } from './core/interceptor/handle-errors.interceptor';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarketplaceModule,
    RouterModule,
    AppRoutingModule,

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HandleErrorsInterceptor,
    multi: true,
  },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
