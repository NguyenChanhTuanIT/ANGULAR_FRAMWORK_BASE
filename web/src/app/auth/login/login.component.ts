import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ComponentActions } from "@shared/components/alert/component-actions";
import { CrudType } from "@shared/enums/crud-type.enum";
import { Utils } from "@shared/enums/utils";
import { EncodeDecodeService } from "@shared/services/helpers/encode-decode.service";
import { ValidationService } from "@shared/services/helpers/validation.service";
import { UserService } from "@shared/services/user/user.service";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup | any;
  formErrors = {
    email: '',
    password: ''
  };
  validationMessages = {
    email: {
      required: 'VALIDATION.MAIL_REQUIRED',
      pattern: 'VALIDATION.MAIL_PATTERN',
    },
    password: {
      required: 'VALIDATION.PASSWORD_REQUIRED',
      minlength: 'VALIDATION.PASSWORD_MIN',
      maxlength: 'VALIDATION.PASSWORD_MAX',
    }
  };

  constructor(
    private formbuilder: FormBuilder,
    private validationService: ValidationService,
    private componentAction: ComponentActions,
    private userService: UserService,
    private authService: AuthService,
    private encodeService: EncodeDecodeService

  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formLogin = this.formbuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
        email: ['', [Validators.required, Validators.pattern(this.validationService.pattern_email)]]
      },
    );
    this.formLogin.valueChanges.subscribe((data: object) => this.onValueChanged(data));
  }

  onValueChanged(data?: any) {
    this.validationService.getValidate(this.formLogin, this.formErrors, this.validationMessages);
  }

  handleLogin() {
    if (this.formLogin.invalid) {
      this.formErrors = this.validationService.checkErorrNotDiry(this.formLogin, this.formErrors, this.validationMessages);
    }
    if (this.formLogin.valid) {
      this.componentAction.showLoading();
      this.authService.login(
        this.encodeService.encode(`${this.formLogin.value.email}:${this.formLogin.value.password}`)).subscribe(
          (res: { token: string; }) => {
            this.userService.setToken(res.token);
            this.userService.login(true);
            this.componentAction.hideLoading();
          },
          (err: { errors: { message: any; }; }) => {
            this.componentAction.showPopup({ title: Utils.TITLE_ERROR, message: err.errors.message, mode: CrudType.CLOSE });
            this.componentAction.hideLoading();
          }
        );
    }
  }
}