import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ItemDetailComponent } from './item-detail/item-detail.component';

@Component({
  selector: 'marketplace-best-sales-item',
  templateUrl: './best-sales-item.component.html',
  styleUrls: ['./best-sales-item.component.scss'],
  standalone: true,
  imports: [CommonModule, ItemDetailComponent]
})
export class BestSalesItemComponent {

}
