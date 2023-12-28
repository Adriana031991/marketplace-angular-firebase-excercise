import { Pipe, type PipeTransform } from '@angular/core';
import { IProduct } from 'src/app/shared/models/IProduct.interface';

@Pipe({
  name: 'marketplaceFilterProductsToPagination',
  standalone: true,
})
export class FilterProductsToPaginationPipe implements PipeTransform {

  transform(value: IProduct[], page: number): IProduct[] {

    return value.slice(page - 1, page + 9)

  }

}
