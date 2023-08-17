import { inject } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';

import { AuthService } from '../services/auth.services';

const checkAuthStatus = (): Observable<boolean> | boolean => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuthentication().pipe(
    tap((isAuthenticated) =>
      console.log('isAuthenticated public: ', isAuthenticated)
    ),
    tap((isAuthenticated) => {
      if (isAuthenticated) router.navigate(['./']);
    }),
    map((isAuthenticated) => !isAuthenticated)
  );
};

export const publicMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
): Observable<boolean> | boolean => {
  return checkAuthStatus();
};

export const publicActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | boolean => {
  return checkAuthStatus();
};
