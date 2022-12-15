import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ResourceService } from '../../core/services/config/resource.service';
import { catchError, Observable } from 'rxjs';
import { Response } from 'src/app/core/models/response';
import { SettingsService } from 'src/app/core/services/config/settings.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentRepository extends ResourceService<any> {

  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  getResourceUrl(): string {
    return 'inquire';
  }

  override toServerModel(entity: any): {} {
      return {
        entity
      };
  }

  override fromServerModel(json: any): any {
    return json;
  }
}
