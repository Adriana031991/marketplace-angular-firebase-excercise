import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDealHotTodayComponent } from './home-deal-hot-today.component';

describe('HomeDealHotTodayComponent', () => {
  let component: HomeDealHotTodayComponent;
  let fixture: ComponentFixture<HomeDealHotTodayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeDealHotTodayComponent]
    });
    fixture = TestBed.createComponent(HomeDealHotTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
