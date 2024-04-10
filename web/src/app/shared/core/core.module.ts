import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { SideNavComponent } from "./side-nav/side-nav.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild()
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent
  ]
})

export class CoreModule {}