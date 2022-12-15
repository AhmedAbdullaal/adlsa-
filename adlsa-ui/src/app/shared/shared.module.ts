import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { DataGridComponent } from './components/data-grid/data-grid.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { FigurecardComponent } from './components/figurecard/figurecard.component';
import { FormComponents } from './components/form';
import { ImagecardComponent } from './components/imagecard/imagecard.component';
import { MsgIconBtnComponent } from './components/msgiconbtn/msgiconbtn.component';
import { ArabicCharOnlyDirective } from './directives/arabic-char-only.directive';
import { AutoFocusDirective } from './directives/autoFocus.directive';
import { EnglishCharOnlyDirective } from './directives/english-char-only.directive';
import { InputLimiterDirective } from './directives/input-limiter.directive';
import { InputNumberDirective } from './directives/input-number.directive';
import { MoveNextByMaxLengthDirective } from './directives/move-next-by-max-length.directive';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { OptionsScrollDirective } from './directives/options-scroll.directive';
import { MaterialModule } from './material-module/material.module';
import { dayInArabicPipe } from './pipes/day-as-arabic-pipe';
import { TimeTo12HoursPipe } from './pipes/time-In12.pipe';

const DIRECTIVES = [
  AutoFocusDirective,
  InputLimiterDirective,
  InputNumberDirective,
  MoveNextByMaxLengthDirective,
  EnglishCharOnlyDirective,
  ArabicCharOnlyDirective,
  NumbersOnlyDirective,
  OptionsScrollDirective
];

@NgModule({
  declarations: [
    ...FormComponents,
    FigurecardComponent,
    ImagecardComponent,
    MsgIconBtnComponent,
    DataGridComponent,
    DeleteDialogComponent,
    dayInArabicPipe,
    TimeTo12HoursPipe,
    ...DIRECTIVES
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule,
    RouterModule.forChild([])
  ],
  exports: [
    ...FormComponents,
    FigurecardComponent,
    ImagecardComponent,
    MsgIconBtnComponent,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataGridComponent,
    DeleteDialogComponent,
    dayInArabicPipe,
    TimeTo12HoursPipe,
    ...DIRECTIVES
  ]
})
export class SharedModule {}
