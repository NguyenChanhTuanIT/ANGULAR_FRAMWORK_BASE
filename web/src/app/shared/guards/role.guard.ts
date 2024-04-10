import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { UserRole } from '@shared/enums/user-role';
import { UserModel } from '@shared/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private userService: UserService, 
    private router: Router,
  ) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.userService.getProfileChanged()) {
      return this.userService.getProfile().pipe(
        map(res => {
          this.userService.setProfileChanged({
            ...res,
            id: res._id
          });
          return this.checkAccessable(next, res);
        })
      )
    } else {
      const info = this.userService.getProfileChanged() || undefined;
      return this.checkAccessable(next, info);
    }
  }

  checkAccessable(next: ActivatedRouteSnapshot, info?: UserModel) {
    const requiredRoles = next.data['roles'];
    if (requiredRoles?.includes(info?.role)) {
      return true;
    }

    switch(info?.role) {
      case UserRole.USER:
        this.router.navigate(['/']);
        break;
      case UserRole.ADMIN:
        this.router.navigate([`${environment.routerLoginAdmin}`]);
        break;
    }
    return false;
  }
}