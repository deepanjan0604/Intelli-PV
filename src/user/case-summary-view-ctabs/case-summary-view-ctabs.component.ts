import { Component, OnInit, Input,  ElementRef, ViewChild, Inject } from '@angular/core';
import { CtabsModel } from 'src/object-model/multiple-support-ctabs-model';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-case-summary-view-ctabs',
  templateUrl: './case-summary-view-ctabs.component.html',
  styleUrls: ['./case-summary-view-ctabs.component.css']
})
export class CaseSummaryViewCtabsComponent implements OnInit {
  
 
  @Input() cTabs;
 
  constructor(private el: ElementRef,@Inject(DOCUMENT) document) { }
  @ViewChild('app-case-summary-view-ctabs') parentcTabs; 

  ngOnInit() {
    console.log("Ctabs:"+this.cTabs)
  }

  
  
  selectedIdx=-1;
  classType:string="";
  elementIterator:{indx:number,elemntItr:boolean}[]=[];
  selectedTabNotMultiple(index){
    var iteration=false;
   
    if(this.elementIterator.length>0){
      for(var i=0;i<this.elementIterator.length;i++){
        if(this.elementIterator[i].indx == index && this.elementIterator[i].elemntItr == true){
        iteration=true;
        break;}
        else{
        iteration=false;
        }
      }

        if(iteration == false){
          var elItr={indx:index,elemntItr:true};
        this.elementIterator.push(elItr);
       
        }  
      

      
    }
      else{
    var elItr={indx:index,elemntItr:true};
      this.elementIterator.push(elItr);
      }
    
   

   this.selectedIdx =index;
   var document:any;
    var element:any;
    var elementClass="";
    var elementId="isNotMultipleC"+ (this.selectedIdx+1);
    document=this.el.nativeElement.parentElement;
    for(var i=0;i<document.getElementsByTagName('div').length;i++){
      if(document.getElementsByTagName('div')[i].id== elementId){
        element=document.getElementsByTagName('div')[i];
        break;
      }
    }
   // element=document.getElementById(elementId);
    if(element.getElementsByTagName('i').length>0){
      debugger
    elementClass=element.getElementsByTagName('i')[0].className.toString();
    this.classType=this.getTabClass(elementClass,iteration);
    }
  }

  selectedTabMultiple(index){
   /*  var iteration=false;
    this.selectedIdx =index;
     var element:any;
     var elementClass="";
     var elementId="isMultipleC"+ (this.selectedIdx+1);
     element=document.getElementById(elementId);
     if(element.getElementsByTagName('i').length>0){
     elementClass=element.getElementsByTagName('i')[0].className.toString();
     this.classType=this.getTabClass(elementClass,iteration);
     } */

  }

  getTabClass(ec:string,itr:boolean){
    
    
    if(ec=="fas fa-plus" && itr==true){
       this.classType = 'active'; 
    }else if (ec=="fas fa-minus" && itr==true){
        this.classType = 'not-active';
    }
    else if(ec=="fas fa-plus" && itr==false){
      this.classType = 'not-active'; 
   }else if (ec=="fas fa-minus" && itr==false){
       this.classType = 'active';
   }
    return this.classType;
  
  }


}
