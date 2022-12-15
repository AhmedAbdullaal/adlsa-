import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from '../../core/services/config/resource.service';
import { catchError, Observable } from 'rxjs';
import { Response } from 'src/app/core/models/response';
import { UnitLocation } from './models/unit-location';

@Injectable({
  providedIn: 'root',
})
export class UnitLocationRepository extends ResourceService<UnitLocation> {

  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  getResourceUrl(): string {
    return 'unit-location';
  }

  getAllUnitLocation(): Observable<Response<UnitLocation>> {
    return this.httpClient.get<Response<any>>(`${this.APIUrl}`).pipe(
      catchError(err => {
        throw new Error(err.message);
      })
    );
  }

  override toServerModel(entity: UnitLocation): {} {
      return {
        id: entity.id? entity.id : null,
        arabicName: entity.arabicName,
        englishName: entity.englishName
      };
  }

  override fromServerModel(json: any): UnitLocation {
    return json;
  }
}
