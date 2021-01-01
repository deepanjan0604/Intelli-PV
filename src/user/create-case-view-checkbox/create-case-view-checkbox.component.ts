import { Component, Input, OnInit } from '@angular/core';
import { FieldListModel } from 'src/object-model/field-list-model';

@Component({
  selector: 'app-create-case-view-checkbox',
  templateUrl: './create-case-view-checkbox.component.html',
  styleUrls: ['./create-case-view-checkbox.component.css']
})
export class CreateCaseViewCheckboxComponent implements OnInit {
  @Input() fieldListData:FieldListModel;
  constructor() { }

  ngOnInit() {
    console.log("Inside Create Case View:"+this.fieldListData);
  
  }

}
