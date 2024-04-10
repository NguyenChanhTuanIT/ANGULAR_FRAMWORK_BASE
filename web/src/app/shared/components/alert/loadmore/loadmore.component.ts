import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loadmore',
  templateUrl: './loadmore.component.html',
  styleUrls: ['./loadmore.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class LoadmoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
