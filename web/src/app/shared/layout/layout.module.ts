import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { CoreModule } from "@shared/core/core.module";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { PrimaryLayoutComponent } from "./primary-layout/primary-layout.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CoreModule,
        TranslateModule.forChild()
    ],
    declarations: [
        PrimaryLayoutComponent,
        MainLayoutComponent,
    ],
    exports: [
        PrimaryLayoutComponent,
        MainLayoutComponent
    ]
})
export class LayoutModule { }
