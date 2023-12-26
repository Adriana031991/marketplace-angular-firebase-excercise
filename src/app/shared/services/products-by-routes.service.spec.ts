import { TestBed } from '@angular/core/testing';

import { ProductsByRoutesService } from './products-by-routes.service';

describe('ProductsByRoutesService', () => {
  let service: ProductsByRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsByRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
