import { Component, Input, OnInit } from '@angular/core';
import { FieldListModel } from 'src/object-model/field-list-model';

@Component({
  selector: 'app-create-case-view-attachment',
  templateUrl: './create-case-view-attachment.component.html',
  styleUrls: ['./create-case-view-attachment.component.css']
})
export class CreateCaseViewAttachmentComponent implements OnInit {
  @Input() fieldListData:FieldListModel;
  constructor() { }

  ngOnInit() {
    console.log("Inside Create Case View:"+this.fieldListData);
    
  }

}
