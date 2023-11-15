import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDealHotComponent } from './carousel-deal-hot.component';

describe('CarouselDealHotComponent', () => {
  let component: CarouselDealHotComponent;
  let fixture: ComponentFixture<CarouselDealHotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CarouselDealHotComponent]
    });
    fixture = TestBed.createComponent(CarouselDealHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
