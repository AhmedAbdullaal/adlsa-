import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MessageService } from 'src/app/core/services/config/message.service';
import { SettingsService } from 'src/app/core/services/config/settings.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private injector: Injector, private settingsService: SettingsService, private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let ignore =
      typeof req.body === 'undefined' ||
      req.body === null ||
      req.body.toString() === '[object FormData]' ||
      req.headers.has('Content-Type');
    if (req.body instanceof FormData && ignore) {
      req = req.clone({
        setHeaders: {
          ContentType: 'multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL',
          Authorization: `Bearer ${this.settingsService.getToken()}`
        }
      });
      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            if (req.headers.get('loginPage')) {
              this.toasterService.errorMessage(' برجاء التأكد من اسم المستخدم وكلمة المرور');
            } else {
              localStorage.removeItem('token');
              this.router.navigate([`/login`]);
            }
            return EMPTY;
          }
          return throwError(error);
        })
      );
    } else {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.settingsService.getToken()}`
        }
      });
      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            if (req.headers.get('loginPage')) {
              this.toasterService.errorMessage(' برجاء التأكد من اسم المستخدم وكلمة المرور');
            } else {
              localStorage.removeItem('token');
              this.router.navigate([`/login`]);
            }
            return EMPTY;
          }
          return throwError(error);
        })
      );
    }
  }

  private get toasterService(): MessageService {
    return this.injector.get(MessageService);
  }

}