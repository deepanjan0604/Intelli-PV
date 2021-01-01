import { Component, Input, OnInit } from '@angular/core';
import { FieldListModel } from 'src/object-model/field-list-model';

@Component({
  selector: 'app-create-case-view-select',
  templateUrl: './create-case-view-select.component.html',
  styleUrls: ['./create-case-view-select.component.css']
})
export class CreateCaseViewSelectComponent implements OnInit {
  @Input() fieldListData:FieldListModel;
  constructor() { }

  ngOnInit() {
    console.log("Inside Create Case View:"+this.fieldListData);
    
  }

}
