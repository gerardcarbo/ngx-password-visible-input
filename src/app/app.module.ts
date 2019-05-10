import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxPasswordVisibleInputLibModule } from 'ngx-password-visible-input-lib';
import { MatIconModule, MatInputModule, MatButtonModule, MatCommonModule, MatRadioModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldPasswordVisibleInputComponent } from 'ngx-password-visible-input-lib';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MaterialModule,
    NgxPasswordVisibleInputLibModule,
    FormlyModule.forRoot({
      types: [
        { name: 'visiblePassword', component: FormlyFieldPasswordVisibleInputComponent, wrappers: ['form-field'] }
      ],
    }),
    FormlyMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
