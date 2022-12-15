import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from '../../core/services/config/resource.service';
import { catchError, Observable } from 'rxjs';
import { Response } from 'src/app/core/models/response';
import { SettingsService } from 'src/app/core/services/config/settings.service';
import { RequestStatus, RequestType } from './models/request';

@Injectable({
  providedIn: 'root',
})
export class RequestRepository extends ResourceService<any> {
private readonly typeUrl = `${SettingsService.configurationEnvironment.api.baseUrl}request/type`;
private readonly statusUrl = `${SettingsService.configurationEnvironment.api.baseUrl}request/status`;

  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  getResourceUrl(): string {
    return 'request';
  }

  getAllRequestType(): Observable<Response<RequestType>> {
    return this.httpClient.get<Response<any>>(`${this.typeUrl}`).pipe(
      catchError(err => {
        throw new Error(err.message);
      })
    );
  }

  getAllRequestStatus(): Observable<Response<RequestStatus>> {
    return this.httpClient.get<Response<any>>(`${this.statusUrl}`).pipe(
      catchError(err => {
        throw new Error(err.message);
      })
    );
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
