import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCaracteristicsComponent } from './home-caracteristics.component';

describe('HomeCaracteristicsComponent', () => {
  let component: HomeCaracteristicsComponent;
  let fixture: ComponentFixture<HomeCaracteristicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeCaracteristicsComponent]
    });
    fixture = TestBed.createComponent(HomeCaracteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
