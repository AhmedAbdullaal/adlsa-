import { Injectable } from '@angular/core';

import { Configuration } from '../../models/configuration.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  static configurationEnvironment: Configuration = { api: { baseUrl: '' } };

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }
}
