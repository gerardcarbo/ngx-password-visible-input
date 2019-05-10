import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordVisibleInputComponent } from './password-visible-input.component';

describe('PasswordVisibleInputComponent', () => {
  let component: PasswordVisibleInputComponent;
  let fixture: ComponentFixture<PasswordVisibleInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordVisibleInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordVisibleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
