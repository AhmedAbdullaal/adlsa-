import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html'
})
export class InputSelectComponent {
  @Input() control!: FormControl;
  @Input() fieldName!: string;
  @Input() data: any;
  @Input() selectedValue!: string;
  @Input() viewedValue!: string;
  @Input() disabled!: boolean;
  compareFu = (a: { id: number }, b: { id: number }): boolean => a?.id === b?.id;
}
