import { APP_BASE_HREF } from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RedirectGuard implements CanActivate {

  constructor(private router: Router, @Inject(APP_BASE_HREF) public baseHref: string) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

      window.location.href = route.data['externalUrl'];
      return true;

  }
}