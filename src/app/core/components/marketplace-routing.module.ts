import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketplaceComponent } from './marketplace.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: '',
    component: MarketplaceComponent,
    children: [
      {
        path: 'products',
        loadComponent: () => import('../../modules/feature-home/pages/product-list/product-list.component').then(m => m.ProductListComponent)
      },
      {
        path: 'product',
        loadComponent: () => import('../../modules/feature-home/pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
      },
      {
        path: 'search',
        loadComponent: () => import('../../modules/feature-home/pages/product-list/product-list.component').then(m => m.ProductListComponent)
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: '**',
        // pathMatch: 'full',
        loadComponent: () => import('../../modules/feature-home/pages/error-page/error-page.component').then(m => m.ErrorPageComponent)

      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketplaceRoutingModule { }
