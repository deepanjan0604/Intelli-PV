import { Component, Input, OnInit } from '@angular/core';
import { FieldListModel } from 'src/object-model/field-list-model';

@Component({
  selector: 'app-create-case-view-checkbox',
  templateUrl: './create-case-view-checkbox.component.html',
  styleUrls: ['./create-case-view-checkbox.component.css']
})
export class CreateCaseViewCheckboxComponent implements OnInit {
  @Input() fieldListData1:any;
  fieldListData:FieldListModel;
  checkboxVal:any;
  constructor() { }

  ngOnInit() {
    this.fieldListData=this.fieldListData1['fieldListDt']
    this.fieldListData.engVal="No"
    console.log("Inside Create Case View:"+this.fieldListData);
    debugger;
  }
  onChange(){
    debugger;
    
    this.fieldListData.val=this.checkboxVal;
    if(this.checkboxVal==true)
    this.fieldListData.engVal="Yes"
    else 
    this.fieldListData.engVal="No"
    this.fieldListData1['fieldListDt']=this.fieldListData;
  }

}
