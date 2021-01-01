import { Component, Input, OnInit, Output } from '@angular/core';
import { FieldListModel } from 'src/object-model/field-list-model';

@Component({
  selector: 'app-create-case-view-textbox',
  templateUrl: './create-case-view-textbox.component.html',
  styleUrls: ['./create-case-view-textbox.component.css']
})
export class CreateCaseViewTextboxComponent implements OnInit {


  @Input() fieldListData:FieldListModel;
  @Output() fieldListDataOP:FieldListModel;
  constructor() { }

  ngOnInit() {
    console.log("Inside Create Case View:"+this.fieldListData);
  
  }

}
