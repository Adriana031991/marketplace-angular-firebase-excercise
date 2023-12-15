import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsBreadcrumbComponent } from '../../components/products-breadcrumb/products-breadcrumb.component';
import { BestSalesItemComponent } from '../../components/best-sales-item/best-sales-item.component';

@Component({
  selector: 'marketplace-products',
  standalone: true,
  imports: [CommonModule, ProductsBreadcrumbComponent, BestSalesItemComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

}
