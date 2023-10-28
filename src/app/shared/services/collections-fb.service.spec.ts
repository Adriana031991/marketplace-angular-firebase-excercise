import { TestBed } from '@angular/core/testing';

import { CollectionsFbService } from './collections-fb.service';

describe('CollectionsFbService', () => {
  let service: CollectionsFbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionsFbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
