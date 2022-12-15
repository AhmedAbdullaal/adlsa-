import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';

export interface IAutoCompleteScrollEvent {
  autoComplete: MatAutocomplete;
  scrollEvent: Event;
}

@Directive({
  selector: 'mat-autocomplete[optionsScroll]'
})
export class OptionsScrollDirective {
  @Input() thresholdPercent = 0.97;
  @Output('optionsScroll') scroll = new EventEmitter<IAutoCompleteScrollEvent>();
  _onDestroy = new Subject();

  constructor(public autoComplete: MatAutocomplete) {
    this.autoComplete.opened
      .pipe(
        tap(() => {
          setTimeout(() => {
            this.removeScrollEventListener();
            this.autoComplete.panel.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
          });
        }),
        takeUntil(this._onDestroy)
      )
      .subscribe();

    this.autoComplete.closed
      .pipe(
        tap(() => this.removeScrollEventListener()),
        takeUntil(this._onDestroy)
      )
      .subscribe();
  }

  private removeScrollEventListener() {
    this.autoComplete.panel.nativeElement.removeEventListener('scroll', this.onScroll);
  }

  onScroll(event: Event) {
    if (this.thresholdPercent === undefined) {
      this.scroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
    } else {
      const threshold = (this.thresholdPercent * 100 * (<HTMLInputElement>event.target).scrollHeight) / 100;
      const current = (<HTMLInputElement>event.target).scrollTop + (<HTMLInputElement>event.target).clientHeight;

      if (current > threshold) {
        this.scroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
      }
    }
  }
}
