import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  templateUrl: './formly-field-password-visible-input.component.html',
  styleUrls: ['./formly-field-password-visible-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldPasswordVisibleInputComponent extends FieldType {

  @Input() placeholder: string;

  constructor() {
    super();
  }
 
  get type() {
    return this.to.type || 'text';
  }

  get name(): string {
    return this.model[this.key] ? this.model[this.key].name : '';
  }

  onChanged(event: any) {
    // tslint:disable-next-line: no-non-null-assertion
    this.field.formControl!.setValue(event.target.value);
  }
}
