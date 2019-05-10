import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyFieldPasswordVisibleInputComponent } from './formly-field-password-visible-input.component';

describe('FormlyFieldPasswordVisibleInputComponent', () => {
  let component: FormlyFieldPasswordVisibleInputComponent;
  let fixture: ComponentFixture<FormlyFieldPasswordVisibleInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlyFieldPasswordVisibleInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyFieldPasswordVisibleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
