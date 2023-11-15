import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '**', pathMatch: 'full', redirectTo: 'home/products'
  },
  {
    path: '',
    loadChildren: () => import('./core/components/marketplace.module').then(m => m.MarketplaceModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
