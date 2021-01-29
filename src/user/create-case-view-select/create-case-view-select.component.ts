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
  selectVal:any;//{'id':string,'name':string};
  
 
  constructor() {   }

  ngOnInit() {
  
    console.log("Inside Create Case View:"+this.fieldListData);
    this.selectVal=this.fieldListData.val;//{'id':this.fieldListData.val,'name':this.fieldListData.engVal};
    
  }

  onChange(){
  
    /* this.fieldListData.val=this.selectVal['id'];
    this.fieldListData.engVal=this.selectVal['name']; */
    for(var i=0;i<this.fieldListData.fieldValueList.length;i++){
      if(this.fieldListData.fieldValueList[i]['id'] === this.selectVal){
        this.fieldListData.val=this.fieldListData.fieldValueList[i].id
      this.fieldListData.engVal=this.fieldListData.fieldValueList[i].txt;
      break;
    }
  }
  }

 
  

}
