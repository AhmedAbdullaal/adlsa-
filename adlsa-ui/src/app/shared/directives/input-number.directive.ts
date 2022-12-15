import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputNumber]'
})
export class InputNumberDirective {
  // @ts-ignore
  @Input() type: 'text' | 'number';
  constructor(private el: ElementRef) {}
  @HostListener('change', ['$event']) onKeyDown(e: { which: number; preventDefault: () => void }): void {
    const element = this.el.nativeElement;
    if (this.type === 'number' && +element.value < 0) {
      element.value = 0;
    }
  }
}
