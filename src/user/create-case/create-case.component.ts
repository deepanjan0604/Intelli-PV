import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import Stepper from 'bs-stepper';
import { UserService } from 'src/services/user.service';
import { DocListModel } from 'src/object-model/document-list-model';
@Component({
  selector: 'app-create-case',
  templateUrl: './create-case.component.html',
  styleUrls: ['./create-case.component.css']
})
export class CreateCaseComponent implements OnInit {
  caseId: Observable<string>;
  private stepper: Stepper;
  docList:Observable<DocListModel>[];
  docListUrl:Observable<DocListModel>[]=[];

  med_watch_src = "../../assets/pdf/FDA-3500_11-26-2019_1.pdf";
  lab_test_watch_src = "../../assets/pdf/FDA-3500_11-26-2019_3.pdf";
  ecg_watch_src = "../../assets/pdf/FDA-3500_11-26-2019_3.pdf";


  next() {
    this.stepper.next();
  }

  onSubmit() {
    return false;
  }


  constructor(route: ActivatedRoute, private userService:UserService) {
    this.caseId  = route.snapshot.params['id'];
    }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    });

    this.userService.getDocumentList(this.caseId,0).subscribe(respData => {
        
      var arr1=new Array();
      arr1=new Array(respData);
      this.docList=[];
      for(var i=0;i<arr1[0].length;i++){
        
          this.docList[i]=Object.assign(new DocListModel, respData[i]);
       
        


       console.log( "Doc list:"+ this.docList);
       
       var id=respData[i].docId
         this.getDocURL(id,i);
      /*  this.userService.getDocumentListURL(id).subscribe(respData => {
       
        var arr=new Array();
        arr=new Array(respData);
        this.docListUrl=[];
        for(var i=0;i<arr.length;i++){
          
            this.docListUrl[i]=Object.assign(new DocListModel, respData[i]);
         }
          
         console.log( "Doc list URL:"+ this.docListUrl);
         
        }); */
        }
      });
  }

  getDocURL(id:any,j:number){
    this.userService.getDocumentListURL(id).subscribe(respData => {
      var arr=new Array();
      
      arr=new Array(respData);
      //this.docListUrl=[];
      for(var i=0;i<arr[0].length;i++){
        
          this.docListUrl[j]=Object.assign(new DocListModel, respData[i]);
       }
        
       console.log( "Doc list URL:"+ this.docListUrl);
       
      });
  }
  selectedIdx = 0;
  selectItem(i):void{
      this.selectedIdx = i;
  }

  getClass(i){
    
   var classList='';
   if(this.selectedIdx == i){
      classList = 'active1'; 
   }else if (this.selectedIdx != i){
       classList = 'not-active1';
   }
   return classList;
 }
 getHeadingClass(i){
     
  var headClass='';
  if(this.selectedIdx == i){
     headClass = 'h3class1'; 
  }else if (this.selectedIdx != i){
    headClass = 'not-h3class1';
  }
  return headClass;
}
}
