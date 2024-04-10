import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { PagerService } from 'src/app/shared/services/helpers/pager.service';

@Component({
  selector: 'app-panigation',
  templateUrl: './panigation.component.html',
  styleUrls: ['./panigation.component.scss']
})
export class PanigationComponent implements OnInit {
  @Input() pageSize = 0;
  @Input() totalPage = 0;
  @Input() currentPage = 1;
  @Output() outputPage = new EventEmitter();

  pager: any = {};

  constructor(
    private pagerService: PagerService,
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setPage(this.currentPage);
  }

  setPage(page: any) {
    this.pager = this.pagerService.getPager(this.totalPage, page, this.pageSize);
  }

  choosepage(page: any) {
    if (page > this.pager.endPage || page < this.pager.startPage) {
      return;
    }
    
    if (page === '...') {
      return;
    }

    if (this.currentPage != page) {
      this.outputPage.emit(page);
    }
  }

}
