import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailListViewComponent } from './item-detail-list-view.component';

describe('ItemDetailListViewComponent', () => {
  let component: ItemDetailListViewComponent;
  let fixture: ComponentFixture<ItemDetailListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItemDetailListViewComponent]
    });
    fixture = TestBed.createComponent(ItemDetailListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
