import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  private pageSizeOptions: number[] = [10, 20, 50, 100];
  private pageSize = 10;

  @Input()
  private length: number;

  @Output()
  private pageEventEmitter = new EventEmitter<PageEvent>();

  constructor() {
  }

  ngOnInit() {
  }

  getPaginatorData(event) {
    this.pageEventEmitter.emit(event);
  }

}
