import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'input[moveNextByMaxLength]'
})
export class MoveNextByMaxLengthDirective {
  @Input() nextInput!: string;
  @Input() maxLength!: number;
  @HostListener('keyup', ['$event']) onKeyDown(keyboardEvent: KeyboardEvent): void {
    const target = keyboardEvent.target as HTMLInputElement | HTMLTextAreaElement | null;

    if (!target || this.maxLength !== target.value.length) return;

    keyboardEvent.preventDefault();

    // @ts-ignore
    let nextElementSibling = document.getElementById(this.nextInput);

    if (nextElementSibling) {
      (nextElementSibling as HTMLInputElement | HTMLTextAreaElement).focus();
      return;
    }
  }
}
