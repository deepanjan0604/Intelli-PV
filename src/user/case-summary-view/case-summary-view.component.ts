import { Component,Input, OnInit } from '@angular/core';
import { TabListsModel } from 'src/object-model/tab-list-model';

@Component({
  selector: 'app-case-summary-view',
  templateUrl: './case-summary-view.component.html',
  styleUrls: ['./case-summary-view.component.css']
})
export class CaseSummaryViewComponent implements OnInit {


@Input() tabList:TabListsModel[];

  constructor() {}

  ngOnInit() {
    debugger;

     this.tabList.sort((a, b) => a.id - b.id)
  }

}
