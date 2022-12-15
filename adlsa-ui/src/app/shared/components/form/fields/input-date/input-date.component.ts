import { Component, Input } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html'
})
export class InputDateComponent {
  // @ts-ignore
  @Input() control: FormControl;
  // @ts-ignore
  @Input() fieldName: string;
  @Input() data: any;
  // @ts-ignore
  @Input() onchange: Function;
}
