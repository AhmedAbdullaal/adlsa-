import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { ResourceService } from '../../core/services/config/resource.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRepository extends ResourceService<any> {
  public isLoggedIn!: boolean;
  public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(this.isLoggedIn);
  constructor(protected override httpClient: HttpClient , private router: Router) {
    super(httpClient);
  }

  getResourceUrl(): string {
    return 'login';
  }

  login(resource: any) : Observable<{ accessToken: string }> {
    return this.httpClient.post<{ accessToken: string }>(`${this.APIUrl}`, this.toServerModel(resource), {headers: { loginApi: 'true'}}).pipe(
      catchError(err => {
          throw new Error(err.message);
      }),
      tap(() => {
        this.updateIsLoggedInStatus(true);
      })
    );
  }

  updateIsLoggedInStatus(isLogged: boolean): void{
    this.isLoggedIn = isLogged;
    this.isLoggedIn$.next(isLogged);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

  override toServerModel(entity: any): any {
    return {
      username: entity.username,
      password: entity.password
    };
  }
}
