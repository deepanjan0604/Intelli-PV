import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { CtabsModel } from 'src/object-model/multiple-support-ctabs-model';

@Component({
  selector: 'app-create-case-view-ctabs',
  templateUrl: './create-case-view-ctabs.component.html',
  styleUrls: ['./create-case-view-ctabs.component.css']
})
export class CreateCaseViewCtabsComponent implements OnInit {


  @Input() cTabs;
  constructor(private el: ElementRef,@Inject(DOCUMENT) document) { }
  @ViewChild('app-create-case-view-ctabs') parentcTabs;

  ngOnInit() {
   
    console.log("Ctabs:"+this.cTabs)
  }

    
  selectedIdx=-1;
  classType:string="";
  headClass:string="";
  elementIterator:{indx:number,elemntItr:boolean,parentTab:string,childTab:string}[]=[];
  selectedTabNotMultiple(index){
    var iteration=false;
    
   

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
   

      if(this.elementIterator.length>0){
        for(var i=0;i<this.elementIterator.length;i++){
          if(this.elementIterator[i].indx == index && this.elementIterator[i].elemntItr == true && this.elementIterator[i].parentTab == document.id.toString() && this.elementIterator[i].childTab == element.id.toString()){
          iteration=true;
          break;}
          else{
          iteration=false;
          }
        }
  
          if(iteration == false){
            var elItr={indx:index,elemntItr:true,parentTab:document.id.toString(),childTab:element.id.toString()};
          this.elementIterator.push(elItr);
         
          }  
        
  
        
      }
        else{
      var elItr={indx:index,elemntItr:true,parentTab:document.id.toString(),childTab:element.id.toString()};
        this.elementIterator.push(elItr);
        }
      
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
       this.headClass = 'h3class'; 
    }else if (ec=="fas fa-minus" && itr==true){
        this.classType = 'not-active';
        this.headClass = 'not-h3class'; 
    }
    else if(ec=="fas fa-plus" && itr==false){
      this.classType = 'not-active'; 
      this.headClass = 'not-h3class'; 
   }else if (ec=="fas fa-minus" && itr==false){
       this.classType = 'active';
       this.headClass = 'h3class'; 
   }
    return this.classType;
  
  }

}
