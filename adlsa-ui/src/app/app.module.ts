import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  ConfirmBoxConfigModule,
  DialogConfigModule,
  NgxAwesomePopupModule,
  ToastNotificationConfigModule
} from '@costlydeveloper/ngx-awesome-popup';
import { HotToastModule } from '@ngneat/hot-toast';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { ConfigService } from './core/services/config/config.service';
import { FeatureModule } from './features/feature.module';
import { SharedModule } from './shared/shared.module';

export function configServiceFactory(config: ConfigService): () => Promise<boolean> {
  return (): Promise<boolean> => config.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    SharedModule,
    FeatureModule,
    HotToastModule.forRoot( {
      style:{
        border:'1px solid #713200',
        padding:'10px',
        margin:'30px',
        color:'#713200',
        'font-size':'25px',
        'width':'500px',
      },
    }
    ),
    NgxAwesomePopupModule.forRoot({
      colorList: {
        success: '#3caea3',
        info: '#2f8ee5',
        warning: '#ffc107',
        danger: '#e46464',
        customOne: '#3ebb1a',
        customTwo: '#bd47fa'
      }
    }),
    ConfirmBoxConfigModule.forRoot({
      confirmBoxCoreConfig: {
        customStyles: {
          titleCSS: 'color: ##454545; background: #FFFFFF; font-size: 20px; padding: 10px; ',
          buttonSectionCSS: 'background: #FFFFFF',
          buttonCSS: 'font-size: 20px;',
          textCSS: 'color: #454545; font-size: 25px; background: #FFFFFF; font-weight: bold;',
          wrapperCSS: 'background: #FFFFFF;'
        }
      }
    }),
    DialogConfigModule.forRoot(),
    ToastNotificationConfigModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'ar'
    })
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: false }
    },
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}