import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { RuleBasedModel } from 'src/object-model/rulebased-model';
import { TabListsModel } from 'src/object-model/tab-list-model';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-create-case-view',
  templateUrl: './create-case-view.component.html',
  styleUrls: ['./create-case-view.component.css']
})
export class CreateCaseViewComponent implements OnInit {
  @Input() tabListData:TabListsModel;

  cardStyle:String;
  selectedIndex:any;
  keyIdn:any='create';
  
  tabListDataonAddTab:TabListsModel[];
  tabID:any;
  
    constructor(private el:ElementRef,@Inject(DOCUMENT) document,private userService:UserService) {
      debugger
      this.tabListData;
      this.cardStyle='cardStyle-collapsed';
      this.tabListDataonAddTab=[];
    }
  

  ngOnInit() {
   
 
    this.tabListDataonAddTab=[];
    console.log("Inside Create Case View:"+this.tabListData );
  
  }
  onSubmit(){

    debugger
  }

  getRulebasedQues(){
    debugger;
  }

  selectedIndx=-1;
  classType:string="";
  headingStyle:string="";
  selectedTabNotMultiple(index){
    debugger;
   this.selectedIndx =index;
    var element:any;
    var elementClass="";
    var elementId="isNotMultipleP"+ (this.selectedIndx+1);
    element=document.getElementById(elementId);
    if(element.getElementsByTagName('i').length>0){
    elementClass=element.getElementsByTagName('i')[0].className.toString();
    this.classType=this.getTabClass(elementClass);
    }
  }

  selectedTabNotMultipleAdd(index){
    debugger;
   this.selectedIndx =index;
    var element:any;
    var elementClass="";
    var elementId="isNotMultiplePAdd"+ (this.selectedIndx+1);
    element=document.getElementById(elementId);
    if(element.getElementsByTagName('i').length>0){
    elementClass=element.getElementsByTagName('i')[0].className.toString();
    this.classType=this.getTabClass(elementClass);
    }
  }

  selectedTabMultiple(index){
    debugger;
    this.selectedIndx =index;
     var element:any;
     var elementClass="";
     var elementId="isMultipleP"+ (this.selectedIndx+1);
     element=document.getElementById(elementId);
     if(element.getElementsByTagName('i').length>0){
     elementClass=element.getElementsByTagName('i')[0].className.toString();
     this.classType=this.getTabClass(elementClass);
     }

  }

  getTabClass(ec:string){
     
    
    if(ec=="fas fa-plus"){
       this.classType = 'active'; 
       this.headingStyle="headstyle"
    }else if (ec=="fas fa-minus"){
        this.classType = 'not-active';
        this.headingStyle="not-headstyle"
    }
    return this.classType;
  }

  onAddTab(id:any){
    debugger
   this.tabListDataonAddTab=[];
    this.tabID=id;
    this.userService.getTabListData(this.tabID).subscribe(respData => {
      debugger;
      this.tabListDataonAddTab=Object.assign(new TabListsModel, respData);
      //this.addTab=true;
    
          }, err=>{
      // this.authService.logout();
     });
  }
}
