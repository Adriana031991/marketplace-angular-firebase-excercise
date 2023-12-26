import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsBreadcrumbComponent } from '../../components/products-breadcrumb/products-breadcrumb.component';
import { BestSalesItemComponent } from '../../components/best-sales-item/best-sales-item.component';
import { ProductsRecomendedComponent } from '../../components/products-recomended/products-recomended.component';
import { ProductsCatalogComponent } from '../../components/products-catalog/products-catalog.component';

@Component({
  selector: 'marketplace-products',
  standalone: true,
  imports: [CommonModule, ProductsBreadcrumbComponent, BestSalesItemComponent, ProductsRecomendedComponent, ProductsCatalogComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

}
