import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillFileComponent } from './fill-file.component';

describe('FillFileComponent', () => {
  let component: FillFileComponent;
  let fixture: ComponentFixture<FillFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
