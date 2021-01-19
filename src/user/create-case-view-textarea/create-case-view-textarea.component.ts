import { Component, Input, OnInit } from '@angular/core';
import { FieldListModel } from 'src/object-model/field-list-model';

@Component({
  selector: 'app-create-case-view-textarea',
  templateUrl: './create-case-view-textarea.component.html',
  styleUrls: ['./create-case-view-textarea.component.css']
})
export class CreateCaseViewTextareaComponent implements OnInit {
  @Input() fieldListData:FieldListModel;
  constructor() { }

  ngOnInit() {
    console.log("Inside Create Case View:"+this.fieldListData);
  
  }
  onBlurEvent(){
    this.fieldListData.engVal=this.fieldListData.val
  }
}
