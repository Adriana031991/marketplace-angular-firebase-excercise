import { Component, EventEmitter, Input, Output, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from 'src/app/shared/models/IProduct.interface';

@Component({
  selector: 'marketplace-catalog-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog-pagination.component.html',
  styleUrls: ['./catalog-pagination.component.scss']
})
export class CatalogPaginationComponent {
  @Input() products = signal<IProduct[]>([])

  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems = computed(() => this.products().length)

  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  public showPrevPage: boolean = false;


  get totalPages(): number {
    return Math.ceil(this.totalItems() / this.itemsPerPage);
  }

  get totalPagesAsArray(): Array<number> {
    let r: number[] = []
    return r = [...r, this.totalPages]
  }

  changePage(page: number): void {
    console.log(this.totalPagesAsArray);
    console.log(this.totalItems());

    if (page >= 1 && page <= this.totalPages) {
      this.showPrevPage = this.currentPage > 1;
      this.currentPage = page;
      this.pageChanged.emit(page);
      console.log('pasa ', page);

    }

  }
}
