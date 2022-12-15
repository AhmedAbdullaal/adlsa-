import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from '../../core/services/config/resource.service';
import { catchError, Observable } from 'rxjs';
import { Response } from 'src/app/core/models/response';
import { SubUnitStatus, SubUnitType } from './models/sub-unit';
import { SettingsService } from 'src/app/core/services/config/settings.service';

@Injectable({
  providedIn: 'root',
})
export class SubUnitRepository extends ResourceService<any> {
private readonly typeUrl = `${SettingsService.configurationEnvironment.api.baseUrl}sub-unit/type`;
private readonly statusUrl = `${SettingsService.configurationEnvironment.api.baseUrl}sub-unit/status`;

  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  getResourceUrl(): string {
    return 'sub-unit';
  }

  getAllSubUnitType(): Observable<Response<SubUnitType>> {
    return this.httpClient.get<Response<any>>(`${this.typeUrl}`).pipe(
      catchError(err => {
        throw new Error(err.message);
      })
    );
  }

  getAllSubUnitStatus(): Observable<Response<SubUnitStatus>> {
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
