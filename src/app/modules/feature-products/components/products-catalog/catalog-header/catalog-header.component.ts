import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'marketplace-catalog-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog-header.component.html',
  styleUrls: ['./catalog-header.component.scss']
})
export class CatalogHeaderComponent {
  @Output() activeView = new EventEmitter();
  activeTab = 1;
  changeTab(tabIndex: number) {
    this.activeTab = tabIndex;
    this.activeView.emit(tabIndex)
  }

}
