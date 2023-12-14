import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketplaceComponent } from './marketplace.component';

const routes: Routes = [

  {
    path: 'home',
    component: MarketplaceComponent,
    children: [

      {
        path: '',
        loadComponent: () => import('../../modules/feature-home/page/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'products/:param',
        loadComponent: () => import('../../modules/feature-products/pages/products/products.component').then(m => m.ProductsComponent)
      },
      {
        path: 'product/:param',
        loadComponent: () => import('../../modules/feature-products/pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
      },
      {
        path: 'search/:param',
        loadComponent: () => import('../../modules/feature-home/components/home-products/product-list.component').then(m => m.ProductListComponent)
      },


      {
        path: '**',
        pathMatch: 'full',
        loadComponent: () => import('../../modules/feature-products/pages/error-page/error-page.component').then(m => m.ErrorPageComponent)

      }
    ]
  },

  /*
    {path: '', component: HomeComponent },
    {path: 'products/:param', component: ProductsComponent },
    {path: 'product/:param', component: ProductComponent },
    {path: 'search/:param', component: SearchComponent },
    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent },
    {path: 'account', component: AccountComponent, canActivate: [ AuthGuard ]},
    {path: 'account/:param', component: AccountComponent, canActivate: [ AuthGuard ]},
    {path: 'shopping-cart', component: ShoppingCartComponent  },
    {path: 'checkout', component: CheckoutComponent,  canActivate: [ AuthGuard ]},
    {path: 'become-a-vendor', component: BecomeAVendorComponent},
    {path: 'store-list', component: StoreListComponent },
    {path: 'store-list/:param', component: StoreListComponent },
    {path: '**', pathMatch:'full', component: Error404Component }
  */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketplaceRoutingModule { }
