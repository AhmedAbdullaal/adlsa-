import { HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import errorMsg from 'src/assets/json/error-messages.json';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          // client-side error
          this.notFoundMessage();
        } else {
          // server-side error
          if (!error.url?.includes('document')) {
            if (error.status === 409) this.getErrorMessage(error.error.code);
            if (
              error.status === 400 ||
              error.status === 404 ||
              error.status === 406 ||
              error.status === 401 ||
              error.status === 422 ||
              error.status === 424 ||
              error.status === 500
            )
              this.getErrorMessage(error.status.toString());
          }
        }
        return EMPTY;
      })
    );
  }

  private getErrorMessage(errorCode: string): void {
     //@ts-ignore
    this.toasterService.errorMessage(errorMsg[errorCode]);
  }

  private notFoundMessage(): void {
    this.toasterService.errorMessage('الرجاء المحاوله مرة اخري');
  }

  private get toasterService(): MessageService {
    return this.injector.get(MessageService);
  }
}
