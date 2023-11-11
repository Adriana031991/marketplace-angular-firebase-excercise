import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketplaceComponent } from './marketplace.component';
import { ErrorPageComponent } from './home/components/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'home',
    children: [

      {
        path: '',
        component: MarketplaceComponent
      },
      // {
      //   path: 'error',
      //   loadComponent: () => import('./home/components/error-page/error-page.component').then(m => m.ErrorPageComponent)
      // },
      {
        path: '**', pathMatch: 'full',
        //  component: ErrorPageComponent 
        loadComponent: () => import('./home/components/error-page/error-page.component').then(m => m.ErrorPageComponent)

      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketplaceRoutingModule { }
