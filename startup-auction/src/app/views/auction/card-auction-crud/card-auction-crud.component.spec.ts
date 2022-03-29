import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAuctionCrudComponent } from './card-auction-crud.component';

describe('CardAuctionCrudComponent', () => {
  let component: CardAuctionCrudComponent;
  let fixture: ComponentFixture<CardAuctionCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAuctionCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAuctionCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
