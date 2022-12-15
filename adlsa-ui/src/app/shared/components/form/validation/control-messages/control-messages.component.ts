import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ValidationMessagesService } from 'src/app/core/services/config/validation-messages.service';

@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html'
})
export class ControlMessagesComponent {
  @Input() control: FormControl = new FormControl();
  @Input() fieldName: string | undefined;
  @Input() showMessage: boolean = false;
  @Input() errorMessagePhone: boolean = false;
  @Input() fieldNameWillNotShowMessage: string = '';
  @Input() requiredLength!: number;

  constructor(private translate: TranslateService) {}

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationMessagesService.getValidatorErrorMessage(
          propertyName,
          this.control.errors[propertyName],
          //@ts-ignore
          this.translate.instant(this.fieldName)
        );
      }
    }

    return null;
  }
}
