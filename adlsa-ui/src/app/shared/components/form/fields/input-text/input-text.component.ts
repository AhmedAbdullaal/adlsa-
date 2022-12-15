import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styles: [
    `
      .makeArrows::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
      .makeArrows[type='number'] {
        -moz-appearance: textfield;
      }
    `
  ]
})
export class InputTextComponent {
  @Input() control: FormControl = new FormControl();
  @Input() fieldName: string = '';
  // @ts-ignore
  @Input() type: 'text' | 'number';
  @Input() hint: string = '';
  @Input() id: string = '';
  @Input() nextInput!: string;
  @Input() OnlyNumber: boolean = false;
  @Input() arabicCharOnly: boolean = false;
  @Input() englishCharOnly: boolean = false;
  @Input() readonly: boolean= false;
  @Input() autofocus: boolean = false;
  // eslint-disable-next-line @typescript-eslint/ban-types
  @Input() blur: Function = () => {};
  @Input() executeEvent: Function= () => {};
  // @ts-ignore
  @Input() maxLength: number;
  // @ts-ignore
  @Input() requiredLength: number;
  @Input() fieldNameWillNotShowMessage: string = '';
  @Input() showMessage: boolean = false;
  @Input() errorMessagePhone: boolean = false;
  // @ts-ignore
  @Input() min: number;
  @Input() arrowsNumberInputRemoved: boolean = false;
}
