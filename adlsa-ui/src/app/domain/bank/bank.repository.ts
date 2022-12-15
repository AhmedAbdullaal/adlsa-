import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResourceService } from '../../core/services/config/resource.service';
import { catchError, Observable } from 'rxjs';
import { Response } from 'src/app/core/models/response';
import { Bank } from './models/bank';

@Injectable({
  providedIn: 'root',
})
export class BankRepository extends ResourceService<Bank> {

  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  getResourceUrl(): string {
    return 'bank';
  }

  getAllBanks(): Observable<Response<Bank>> {
    return this.httpClient.get<Response<any>>(`${this.APIUrl}`).pipe(
      catchError(err => {
        throw new Error(err.message);
      })
    );
  }

  override toServerModel(entity: Bank): {} {
      return {
        id: entity.id? entity.id : null,
        arabicName: entity.arabicName,
        englishName: entity.englishName
      };
  }

  override fromServerModel(json: any): Bank {
    return json;
  }
}
