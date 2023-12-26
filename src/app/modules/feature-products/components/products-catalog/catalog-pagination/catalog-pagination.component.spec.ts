import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogPaginationComponent } from './catalog-pagination.component';

describe('CatalogPaginationComponent', () => {
  let component: CatalogPaginationComponent;
  let fixture: ComponentFixture<CatalogPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CatalogPaginationComponent]
    });
    fixture = TestBed.createComponent(CatalogPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
