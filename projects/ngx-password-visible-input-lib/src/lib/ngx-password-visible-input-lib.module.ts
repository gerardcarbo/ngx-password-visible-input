import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatInputModule, MatButtonModule } from '@angular/material';
import { PasswordVisibleInputComponent } from './password-visible-input/password-visible-input.component';
import { FormlyFieldPasswordVisibleInputComponent } from './password-visible-input/formly-field-password-visible-input/formly-field-password-visible-input.component';

@NgModule({
  declarations: [
    PasswordVisibleInputComponent,
    FormlyFieldPasswordVisibleInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    PasswordVisibleInputComponent,
    FormlyFieldPasswordVisibleInputComponent
  ]
})
export class NgxPasswordVisibleInputLibModule { }
