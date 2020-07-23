import { Component, OnInit, Input } from '@angular/core';
import { CtabsModel } from 'src/object-model/multiple-support-ctabs-model';

@Component({
  selector: 'app-case-summary-view-ctabs',
  templateUrl: './case-summary-view-ctabs.component.html',
  styleUrls: ['./case-summary-view-ctabs.component.css']
})
export class CaseSummaryViewCtabsComponent implements OnInit {


  @Input() cTabs;
  constructor() { }

  ngOnInit() {
    debugger;
  }

  

}
