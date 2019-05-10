import { Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public version: string = environment.VERSION;
  
  title = 'ngx-password-visible-input';
  mode = 'mousedown';
  color = 'primary';
  raised = true;
  pwd = 'ThisIsAPassword!';

  // formly data
  formlyForm = new FormGroup({});
  formlyFields: FormlyFieldConfig[] = [
    {
      key: 'user',
      type: 'input',
      templateOptions: {
        placeholder: 'User',
        required: true
      }
    },
    {
      key: 'password',
      type: 'visiblePassword',
      templateOptions: {
        placeholder: 'Password',
        required: true
      }
    }
  ];
  formlyModel = {
    user: '',
    password: ''
  };
}
