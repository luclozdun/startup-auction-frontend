import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAuctionCrudComponent } from './list-auction-crud.component';

describe('ListAuctionCrudComponent', () => {
  let component: ListAuctionCrudComponent;
  let fixture: ComponentFixture<ListAuctionCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAuctionCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAuctionCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
