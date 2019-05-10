import { Component, OnInit, ChangeDetectionStrategy, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'ngx-password-visible-input',
  templateUrl: './password-visible-input.component.html',
  styleUrls: ['./password-visible-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordVisibleInputComponent implements OnInit {

  @Input()
  public color: 'primary' | 'accent' | 'warn' | '' = '';

  @Input()
  public raised = false;

  @Input()
  public placeholder: string;

  @Input()
  public formControlName: string;

  @Input()
  public mode: 'mousedown' | 'toggle' = 'mousedown';

  public input: any;
  public isShowing = false;

  constructor(private elem: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.input = this.elem.nativeElement.querySelector('input');
    if (!this.input) {
      throw new Error(`No input element found.`);
    }
    this.renderer.setStyle(this.input, 'flex', '1');
  }

  toggleShowing($event: any) {
    if (this.mode === 'toggle') {
      this.isShowing = !this.isShowing;
      this.updateInputType();
    }
  }

  private updateInputType() {
    this.renderer.setAttribute(this.input, 'type', this.isShowing ? 'text' : 'password');
  }

  mousedown($event: any) {
    if (this.mode === 'mousedown') {
      this.isShowing = true;
      this.updateInputType();
    }
  }

  mouseup($event: any) {
    if (this.mode === 'mousedown') {
      this.isShowing = false;
      this.updateInputType();
    }
  }

}
