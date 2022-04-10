import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateStyleComponent } from './date-style.component';

describe('DateStyleComponent', () => {
  let component: DateStyleComponent;
  let fixture: ComponentFixture<DateStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
