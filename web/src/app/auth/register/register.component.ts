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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup | any;
  formErrors = {
    email: '',
    password: '',
    confirm_password: ''
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
    },
    confirm_password: {
      required: 'VALIDATION.PASSWORD_REQUIRED',
      isMatching: 'VALIDATION.PASSWORD_NOT_MATCH'
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
    this.componentAction.subject_save.subscribe(
      res => {
        this.save();
      }
    );
    this.componentAction.subject_text.subscribe(
      res => {
      }
    );
  }

  initForm() {
    this.formRegister = this.formbuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
        email: ['', [Validators.required, Validators.pattern(this.validationService.pattern_email)]],
        confirm_password: ['', [Validators.required, this.validationService.matchPassword]]
      }
    );
    this.formRegister.valueChanges.subscribe((data : object) => this.onValueChanged(data));
    this.formRegister.get('password').valueChanges.subscribe((value : string) => {
      if (value) {
        this.formRegister.get('confirm_password').setValidators([Validators.required, this.validationService.matchPassword]);
        this.formRegister.get('confirm_password').updateValueAndValidity();
      }
    })
  }



  onValueChanged(data?: any) {
    this.validationService.getValidate(this.formRegister, this.formErrors, this.validationMessages);
  }

  handleRegister() {
    if (this.formRegister.invalid) {
      this.formErrors = this.validationService.checkErorrNotDiry(this.formRegister, this.formErrors, this.validationMessages);
      }
    if (this.formRegister.valid) {
      this.componentAction.showLoading();
      this.authService.register(
        this.encodeService.encode(`${this.formRegister.value.email}:${this.formRegister.value.password}`)).subscribe(
          res => {
            this.userService.setToken(res.token);
            this.userService.login(true);
            this.componentAction.hideLoading();
          },
          err => {
            this.componentAction.showPopup({ title: Utils.TITLE_ERROR, message: err.errors.message, mode: CrudType.CLOSE });
            this.componentAction.hideLoading();
          }
        );
    }
  }

  save() {
  }
}
