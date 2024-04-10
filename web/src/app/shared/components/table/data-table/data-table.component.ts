import { Component, OnInit, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';
import { PagerService } from '@shared/services/helpers/pager.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  providers: [PagerService]
})
export class DataTableComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() headers: any[] = [];
  @ContentChild('headersTmpl') headersTmpl: TemplateRef<any>;
  @ContentChild('rowsTmpl') rowsTmpl: TemplateRef<any>;

  @Output() outputActions = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickActions(item: any) {
    this.outputActions.emit(item.item);
    console.log(item.item);
  }
}