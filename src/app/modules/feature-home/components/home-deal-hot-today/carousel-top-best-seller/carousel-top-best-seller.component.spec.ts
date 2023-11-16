import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTopBestSellerComponent } from './carousel-top-best-seller.component';

describe('CarouselTopBestSellerComponent', () => {
  let component: CarouselTopBestSellerComponent;
  let fixture: ComponentFixture<CarouselTopBestSellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CarouselTopBestSellerComponent]
    });
    fixture = TestBed.createComponent(CarouselTopBestSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
