import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfirmBoxEvokeService } from '@costlydeveloper/ngx-awesome-popup';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  errorMessage = (errorText: string): void => {
    this.toast.error(errorText);
  };

  warnMessage = (errorText: string): void => {
    this.toast.warning(errorText);
  };

  successMessage = (text: string): void => {
    this.toast.success(text);
  };
  
  deleteConfirmation = (header: string, body: string): Observable<any> => {
    return this.confirmBoxEvokeService.warning(header, body, 'تأكيد', 'إلغاء');
  };
  
  clearToaster(){
    this.toast.close();
  }
  
  constructor(
    private toast: HotToastService,
    private confirmBoxEvokeService: ConfirmBoxEvokeService
  ) {}
}
