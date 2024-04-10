import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRouting } from './auth.routing';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from './auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ConfirmPopupComponent } from '@shared/components/alert/confirm-popup/confirm-popup.component';

@NgModule({
    imports: [
        CommonModule,
        AuthRouting,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule.forChild(),
        ConfirmPopupComponent
    ],
    declarations: [
        RegisterComponent,
        LoginComponent,
        VerifyEmailComponent
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule { }
