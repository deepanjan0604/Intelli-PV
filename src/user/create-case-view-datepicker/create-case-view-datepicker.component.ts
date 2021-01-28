import { Component, Input, OnInit } from '@angular/core';
import { FieldListModel } from 'src/object-model/field-list-model';

@Component({
  selector: 'app-create-case-view-datepicker',
  templateUrl: './create-case-view-datepicker.component.html',
  styleUrls: ['./create-case-view-datepicker.component.css']
})
export class CreateCaseViewDatepickerComponent implements OnInit {

  @Input() fieldListData:FieldListModel;
  constructor() { }

  ngOnInit() {
    
    this.fieldListData.val=new Date(this.fieldListData.val).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
    console.log("Inside Create Case View:"+this.fieldListData);
 
  }

  onBlurEvent(event){
    
    this.fieldListData.engVal=event;
  }

}
