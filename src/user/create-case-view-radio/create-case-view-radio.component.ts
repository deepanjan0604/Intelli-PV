import { Component, Input, OnInit } from '@angular/core';
import { FieldListModel } from 'src/object-model/field-list-model';

@Component({
  selector: 'app-create-case-view-radio',
  templateUrl: './create-case-view-radio.component.html',
  styleUrls: ['./create-case-view-radio.component.css']
})
export class CreateCaseViewRadioComponent implements OnInit {
  @Input() fieldListData:FieldListModel;
  options:string="";
  constructor() { }

  ngOnInit() {
    console.log("Inside Create Case View:"+this.fieldListData);
  
  }

}
