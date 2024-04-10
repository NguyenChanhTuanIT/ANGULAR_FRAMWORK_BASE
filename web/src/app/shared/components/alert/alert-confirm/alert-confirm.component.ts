import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CrudType } from '@shared/enums/crud-type.enum';
import { AlertModel } from '@shared/models/alert.model';

@Component({
  selector: 'app-alert-confirm',
  templateUrl: './alert-confirm.component.html',
  styleUrls: ['./alert-confirm.component.scss'],
  providers: [
    TranslateService
  ]
})
export class AlertConfirmComponent implements OnInit {
  @Input() alert : AlertModel;
  @Input() show_input = false;
  @Output() handleClose = new EventEmitter();
  @Output() handleSave = new EventEmitter();
  @Output() handleKeyup = new EventEmitter();
  @Output() handleSuccess = new EventEmitter();

  CrudType = CrudType;
  constructor() { }

  ngOnInit() {
  }

  close() {
    this.handleClose.emit(this.alert);
  }

  save() {
    this.handleSave.emit(this.alert);
  }

  key(value : string) {
    this.handleSave.emit(value);
  }

  success() {
    this.handleSuccess.emit(this.alert);
  }

}
