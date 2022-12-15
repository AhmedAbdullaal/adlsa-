import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputArabicCharOnly]'
})
export class ArabicCharOnlyDirective {
  @Input() arabicCharOnly: boolean = false;

  @HostListener('keypress', ['$event']) onkeypress(event: KeyboardEvent): void {
    let e = <KeyboardEvent>event;

    if (this.arabicCharOnly) {
      var regex = new RegExp("[ء-ي0-9 ]+$");
      var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
      if (regex.test(str)) {
          return ;
      }

      e.preventDefault();
      return ;
  }
}
}
