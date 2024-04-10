import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmModel } from '@shared/models/alert.model';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss'],
  standalone: true,
  imports: [TranslateModule, CommonModule]
})
export class ConfirmPopupComponent implements OnInit {
  @Input() data: ConfirmModel;
  @Input() hideCancelBtn = false;
  @Output() closePopup = new EventEmitter();
  @Output() confirmSubmit = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  cancel() {
    this.closePopup.emit();
  }

  confirmOK() {
    this.confirmSubmit.emit();
  }

}
