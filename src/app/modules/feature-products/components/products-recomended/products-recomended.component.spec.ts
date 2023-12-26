import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsRecomendedComponent } from './products-recomended.component';

describe('ProductsRecomendedComponent', () => {
  let component: ProductsRecomendedComponent;
  let fixture: ComponentFixture<ProductsRecomendedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductsRecomendedComponent]
    });
    fixture = TestBed.createComponent(ProductsRecomendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
