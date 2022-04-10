import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseimgComponent } from './firebaseimg.component';

describe('FirebaseimgComponent', () => {
  let component: FirebaseimgComponent;
  let fixture: ComponentFixture<FirebaseimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirebaseimgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
