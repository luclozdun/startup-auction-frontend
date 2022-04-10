import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaConformComponent } from './textarea-conform.component';

describe('TextareaConformComponent', () => {
  let component: TextareaConformComponent;
  let fixture: ComponentFixture<TextareaConformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaConformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaConformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
