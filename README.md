# NgxPasswordVisibleInput

Angular Material password visible input.
Formly support.

# Install

npm i ngx-password-visible-input

# Usage

There are two operating modes:

* mousedown: the password is shown only when the view button is pressed (default).
* toggle: the visibility of the password is toggled when the view button is pressed.

Button color can be controled by the color property ( 'primary' | 'accent' | 'warn' | '' ) and can be raised.

``` html
    <ngx-password-visible-input [mode]="mode" [color]="color" [raised]="raised" >
      <input type="password" placeholder="Insert password" [(ngModel)]="pwd" />
    </ngx-password-visible-input>
```

Formly support is avaible through FormlyFieldPasswordVisibleInputComponent. Must be installed in FormlyModule by the library user:

``` javascript
    FormlyModule.forRoot({
      types: [
        { name: 'visiblePassword', component: FormlyFieldPasswordVisibleInputComponent, wrappers: ['form-field'] }
      ],
    })
```

# Demo

See <a href="https://gerardcarbo.github.io/ngx-password-visible-input/" target="_blank">https://gerardcarbo.github.io/ngx-password-visible-input/</a> 

# License

<a href="/LICENSE">MIT</a>