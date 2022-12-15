import { Injectable } from '@angular/core';
import { of} from 'rxjs';
import {AbstractControl, FormControl, FormGroup, ValidationErrors} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationMessagesService {

  constructor() { }
  static getValidatorErrorMessage = (validatorName: string, validatorValue?: any, fieldName?: string) => {

    const config = {
      required: `  يرجي إدخال ${fieldName}`,
      validChoose: `  يرجي إختيار ${fieldName}`,
      validDateLess: `يرجي إدخال تاريخ قبل تاريخ اليوم`,
      validDateMore: `يرجي إدخال تاريخ أكبر من تاريخ اليوم`,
      email: 'برجاء ادخال صيغه صحيحه '+'مثل : (yourname@example.com)',
      pattern: 'يرجي إدخال صيغه صحيحه',
      minlength: ` يرجي إدخال أكثر من ${validatorValue ? validatorValue.requiredLength : 0}`,
      min: ` يرجي إدخال رقم أكبر من ${validatorValue ? validatorValue.min-1 : 0}`,
      maxlength: ` يرجي إدخال أقل من${validatorValue ? validatorValue.requiredLength : 0}`,
      invalidPassword: 'Password must be at least 6 characters long, and contain a number.',
      invalidMatch: 'The password and confirm password must match'
    };
    // @ts-ignore
    return config[validatorName];
  };
  getMessages = () => {
    return of([
      'required',
      'validChoose',
      'validDate',
      'email',
      'pattern',
      'minLength',
      'min',
      'maxLength',
      'invalidPassword',
      'invalidMatch'
    ]);
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  validateDateLess(input: AbstractControl): ValidationErrors | null {
    if (input.value && input.value > new Date().toISOString().substring(0, 10)) {
      return { validDateLess: true };
    }
    return null;
  }
  validateDateMore(input: AbstractControl): ValidationErrors | null {
    if (input.value && input.value <= new Date().toISOString().substring(0, 10)) {
      return { validDateMore: true };
    }
    return null;
  }
  validateSelectInput(input: FormControl): ValidationErrors | null {
    if (input.value === 'new') {
      return { validChose: true };
    }
    return null;
  }

}
