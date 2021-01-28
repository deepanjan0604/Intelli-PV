import { Component, Input, OnInit } from '@angular/core';
import { FieldListModel } from 'src/object-model/field-list-model';
import { TabListsModel } from 'src/object-model/tab-list-model';

@Component({
  selector: 'app-create-case-view-radio',
  templateUrl: './create-case-view-radio.component.html',
  styleUrls: ['./create-case-view-radio.component.css']
})
export class CreateCaseViewRadioComponent implements OnInit {
  @Input() fieldListData1:any;
 // @Input() tablistDt:TabListsModel;
  options:string="";
  radioVal:any//{'id':string,'name':string};
  fieldListData:FieldListModel;
  
  constructor() { }

  ngOnInit() {
   
    this.fieldListData=this.fieldListData1['fieldListDt']
    console.log("Inside Create Case View:"+this.fieldListData);
    this.radioVal={'id':this.fieldListData.val,'name':this.fieldListData.engVal};
   
  }



  onChange(event){
   
   this.fieldListData.val=this.fieldListData.fieldValueList[event].id
   this.fieldListData.engVal=this.fieldListData.fieldValueList[event].txt;
   // this.fieldListData.val=this.radioVal['id'];
   // this.fieldListData.engVal=this.radioVal['name'];
    this.fieldListData1['fieldListDt']=this.fieldListData;
  }

}
