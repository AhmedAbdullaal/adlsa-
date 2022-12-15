import {  Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
    selector: "[appAutoFocus]"
})
export class AutoFocusDirective implements OnChanges {
    @Input()  autofocus! : boolean;
    constructor(private ele: ElementRef) { 
    }
    ngOnChanges(): void {
       if (this.autofocus)
       this.ele.nativeElement.focus() 
    }
}