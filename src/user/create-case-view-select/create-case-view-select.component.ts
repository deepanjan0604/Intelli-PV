import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FieldListModel } from 'src/object-model/field-list-model';

@Component({
  selector: 'app-create-case-view-select',
  templateUrl: './create-case-view-select.component.html',
  styleUrls: ['./create-case-view-select.component.css']
})
export class CreateCaseViewSelectComponent implements OnInit {
  @Input() fieldListData:FieldListModel;
  selectVal:{'id':string,'name':string};
  
 
  constructor() {   }

  ngOnInit() {
    console.log("Inside Create Case View:"+this.fieldListData);
    this.selectVal={'id':this.fieldListData.val,'name':this.fieldListData.engVal};
    
  }

  onChange( ){
    
    this.fieldListData.val=this.selectVal['id'];
    this.fieldListData.engVal=this.selectVal['name'];
  }
  

}
