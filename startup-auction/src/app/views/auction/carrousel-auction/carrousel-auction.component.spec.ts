import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselAuctionComponent } from './carrousel-auction.component';

describe('CarrouselAuctionComponent', () => {
  let component: CarrouselAuctionComponent;
  let fixture: ComponentFixture<CarrouselAuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselAuctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
