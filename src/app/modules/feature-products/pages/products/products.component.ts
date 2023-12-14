import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsBreadcrumbComponent } from '../../components/products-breadcrumb/products-breadcrumb.component';

@Component({
  selector: 'marketplace-products',
  standalone: true,
  imports: [CommonModule, ProductsBreadcrumbComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

}
