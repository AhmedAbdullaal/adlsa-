import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { filter, map, Observable} from 'rxjs';
import { AuthRepository } from './auth.repository';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authRepository : AuthRepository) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
     return true;
  }
}