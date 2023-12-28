import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Signal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from 'src/app/shared/models/IProduct.interface';

@Component({
  selector: 'marketplace-catalog-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog-pagination.component.html',
  styleUrls: ['./catalog-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CatalogPaginationComponent {
  @Input() products!: Signal<IProduct[]>

  currentPage: number = 1;

  itemsPerPage: number = 10;
  totalItems = computed(() => this.products().length)

  @Output() pageChanged: EventEmitter<number> = new EventEmitter();



  get totalPages(): number {
    console.log(this.currentPage);

    return Math.ceil(this.totalItems() / this.itemsPerPage);
  }

  get totalPagesAsArray(): number[] {
    let pages: number[] = []
    console.log(this.totalPages);

    for (let index = 0; index < this.totalPages; index++) {
      pages.push(index)

    }

    return pages
  }

  changePage(page: number): void {

    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChanged.emit(page);

    }

  }
}
