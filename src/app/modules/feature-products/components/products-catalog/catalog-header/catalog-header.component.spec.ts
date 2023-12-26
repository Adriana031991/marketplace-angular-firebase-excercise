import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogHeaderComponent } from './catalog-header.component';

describe('CatalogHeaderComponent', () => {
  let component: CatalogHeaderComponent;
  let fixture: ComponentFixture<CatalogHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CatalogHeaderComponent]
    });
    fixture = TestBed.createComponent(CatalogHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
