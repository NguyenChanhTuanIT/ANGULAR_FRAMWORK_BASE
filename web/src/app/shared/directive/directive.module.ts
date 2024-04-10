import { NgModule } from "@angular/core";
import { ThrottleClickDirective } from "./throttleClick.directive";
import { RequiredRolesDirective } from "./required-role.directive";


@NgModule({
  declarations: [
    RequiredRolesDirective,
    ThrottleClickDirective
  ],
  imports: [],
  exports: [
    RequiredRolesDirective,
    ThrottleClickDirective
  ],
  providers: []
})

export class DirectiveModule { }