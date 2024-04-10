import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertConfirmComponent } from './alert-confirm/alert-confirm.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule.forChild()
    ],
    declarations: [
        AlertConfirmComponent,
        LoadingComponent
    ]
})
export class AlertModule { }
