import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ResourceService } from '../../core/services/config/resource.service';
import { catchError, Observable } from 'rxjs';
import { Response } from 'src/app/core/models/response';
import { SettingsService } from 'src/app/core/services/config/settings.service';
import { Payment } from './models/payment';

@Injectable({
  providedIn: 'root',
})
export class PaymentRepository extends ResourceService<any> {
private readonly ownerUrl = `${SettingsService.configurationEnvironment.api.baseUrl}payment/owner`;
private readonly beneficiaryUrl = `${SettingsService.configurationEnvironment.api.baseUrl}payment/beneficiary`;
private readonly statusUrl = `${SettingsService.configurationEnvironment.api.baseUrl}payment/status`;

  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  getResourceUrl(): string {
    return 'payment';
  }
  
  getAllPaymentOwner(p: {} = {}): Observable<Response<Payment>> {
    const params = new HttpParams({ fromObject: p });

    return this.httpClient.get<Response<any>>(`${this.ownerUrl}?${params.toString()}`).pipe(
      catchError(err => {
        throw new Error(err.message);
      })
    );
  }

  getAllPaymentBeneficiary(p: {} = {}): Observable<Response<Payment>> {
    const params = new HttpParams({ fromObject: p });

    return this.httpClient.get<Response<any>>(`${this.beneficiaryUrl}?${params.toString()}`).pipe(
      catchError(err => {
        throw new Error(err.message);
      })
    );
  }

  getAllPaymentStatus(): Observable<Response<Payment>> {
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
