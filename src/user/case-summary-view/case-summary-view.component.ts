import { Component,Input, OnInit, ElementRef, Inject } from '@angular/core';
import { TabListsModel } from 'src/object-model/tab-list-model';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-case-summary-view',
  templateUrl: './case-summary-view.component.html',
  styleUrls: ['./case-summary-view.component.css']
})
export class CaseSummaryViewComponent implements OnInit {


@Input() tabList:TabListsModel[];
cardStyle:String;
selectedIndex:any;

  constructor(private el:ElementRef,@Inject(DOCUMENT) document) {

    this.cardStyle='cardStyle-collapsed';
  }

  sortCTabs(cTabs){
    return cTabs.sort((a, b) => a.id - b.id)

  }

  sortSectionList(sectionList){
   return sectionList.sort((a, b) => a.sId - b.sId)
  }

  /* buildCtabs(cTabs){
    debugger;
    if(cTabs.length>0){
    cTabs=this.sortCTabs(cTabs);
    for(var j=0;j<cTabs.length;j++){
      for(var k=0;k<cTabs[j].window.length;k++){
        if(cTabs[j].canMultiple == true){
      return cTabs[j].window[k].sectionList=this.sortSectionList(cTabs[j].window[k].sectionList);
      }

    }
  }
}
  } */
  
  ngOnInit() {
    this.tabList=this.tabList.sort((a, b) => a.id - b.id)
      for(var i=0;i<this.tabList.length;i++){
       if(this.tabList[i].canMultiple == true){
        this.tabList[i].cTabs=this.sortCTabs(this.tabList[i].cTabs);
        for(var j=0;j<this.tabList[i].cTabs.length;j++){
          for(var k=0;k<this.tabList[i].cTabs[j].window.length;k++){
            this.tabList[i].cTabs[j].window[k].sectionList=this.sortSectionList(this.tabList[i].cTabs[j].window[k].sectionList);
          }

        }

       }
       else if(this.tabList[i].canMultiple == false){
        for(var k=0;k<this.tabList[i].window.length;k++){
          this.tabList[i].window[k].sectionList=this.sortSectionList(this.tabList[i].window[k].sectionList);
        }
       }
     } 
  }
 /*  collapseCard(i,event){

    debugger;
    if(event.srcElement.attributes[1].textContent == "fas fa-minus"){
      this.selectedIndex=-1;
      this.cardStyle='cardStyle-collapsed';
    }
    else if(event.srcElement.attributes[1].textContent == "fas fa-plus"){
      this.selectedIndex=i;
      this.cardStyle='cardStyle-not-collapsed';
    }
    
  } */

  selectedIndx=-1;
  classType:string="";
  selectedTabNotMultiple(index){
    
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

  selectedTabMultiple(index){
    
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
    }else if (ec=="fas fa-minus"){
        this.classType = 'not-active';
    }
    return this.classType;
  }
}
