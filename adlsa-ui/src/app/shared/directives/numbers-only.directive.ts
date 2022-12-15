import { Directive, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputNumberOnly]'
})
export class NumbersOnlyDirective {
  @Input() OnlyNumber: boolean = false;
  private ngControl: NgControl;

  constructor(private ngControls: NgControl) {
    this.ngControl = ngControls;
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    if (this.OnlyNumber) {
      this.ngControl.control?.patchValue(value.replace(/[^0-9]/g, ''));
    }
  }
}
