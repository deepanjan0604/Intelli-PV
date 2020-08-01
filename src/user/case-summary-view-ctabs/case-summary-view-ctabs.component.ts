import { Component, OnInit, Input,  ElementRef, ViewChild } from '@angular/core';
import { CtabsModel } from 'src/object-model/multiple-support-ctabs-model';

@Component({
  selector: 'app-case-summary-view-ctabs',
  templateUrl: './case-summary-view-ctabs.component.html',
  styleUrls: ['./case-summary-view-ctabs.component.css']
})
export class CaseSummaryViewCtabsComponent implements OnInit {
  
 
  @Input() cTabs;
 
  constructor(private el: ElementRef) { }
  @ViewChild('app-case-summary-view-ctabs') parentcTabs; 

  ngOnInit() {
    console.log("Ctabs:"+this.cTabs)
  }

  
  
  selectedIdx=-1;
  classType:string="";
  selectedTabNotMultiple(index){
    debugger
    
   this.selectedIdx =index;
    var element:any;
    var elementClass="";
    var elementId="isNotMultipleC"+ (this.selectedIdx+1);
    element=document.getElementById(elementId);
    if(element.getElementsByTagName('i').length>0){
    elementClass=element.getElementsByTagName('i')[0].className.toString();
    this.classType=this.getTabClass(elementClass);
    }
  }

  selectedTabMultiple(index){
    
    this.selectedIdx =index;
     var element:any;
     var elementClass="";
     var elementId="isMultipleC"+ (this.selectedIdx+1);
     element=document.getElementById(elementId);
     if(element.getElementsByTagName('i').length>0){
     elementClass=element.getElementsByTagName('i')[0].className.toString();
     this.classType=this.getTabClass(elementClass);
     }

  }

  getTabClass(ec:string){
     
    
    if(ec=="fas fa-plus"){
       this.classType = 'active'; 
    }else if (ec=="fas fa-minus"){
        this.classType = 'not-active';
    }
    return this.classType;
  }


}
