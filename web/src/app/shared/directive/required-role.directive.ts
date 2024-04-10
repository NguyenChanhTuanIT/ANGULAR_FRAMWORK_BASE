import { Directive, Input, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserRole } from '@shared/enums/user-role';
import { UserService } from '@shared/services/user/user.service';

@Directive({
  selector: '[appRequiredRoles]',
})
export class RequiredRolesDirective {
  @Input()
  appRequiredRoles: UserRole[] = [];
  private hasView = false;
  private current_user_role: UserRole;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userService: UserService
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes && changes['appRequiredRoles'] && changes['appRequiredRoles'].currentValue) {
      if (!this.userService.getProfileChanged()) {
        this.userService.getProfile().subscribe({
          next: (res) => {
            this.userService.setProfileChanged({
              ...res,
              id: res._id
            });
            this.current_user_role = res!.role;
            this.checkAuthorization();
          }
        });
      } else {
        this.current_user_role = this.userService.getProfileChanged()?.role!;
        this.checkAuthorization();
      }
    }
  }

  checkAuthorization() {
    if (!this.hasView && this.appRequiredRoles.includes(this.current_user_role)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (this.hasView && !this.appRequiredRoles.includes(this.current_user_role)) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
