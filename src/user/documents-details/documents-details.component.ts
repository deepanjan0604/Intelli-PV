import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from 'src/services/user.service';
import { DocListModel } from 'src/object-model/document-list-model';


@Component({
  selector: 'app-documents-details',
  templateUrl: './documents-details.component.html',
  styleUrls: ['./documents-details.component.css'],
})
export class DocumentsDetailsComponent implements OnInit {
  caseId: any;
  med_watch_src = "../../assets/pdf/FDA-3500_11-26-2019_1.pdf";
  lab_test_watch_src = "../../assets/pdf/FDA-3500_11-26-2019_2.pdf";
  ecg_watch_src = "https://srivastava-01092018.s3.us-west-2.amazonaws.com/FOLDER_00/Medwatch.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200201T100245Z&X-Amz-SignedHeaders=host&X-Amz-Expires=14999&X-Amz-Credential=AKIA565AWKTKH2VS7KQ7%2F20200201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=39e0b34ab76db0c6789e57695a00ac38a2b8ee672032c13cd61bc7573053c6f7";
  docId_1_data: any;
  docId_2_data: any;
  docId_3_data: any;
  fileUrl_1_data: any;
  fileUrl_2_data: any;
  fileUrl_3_data: any;


  docList:Observable<DocListModel>[];
  docListUrl:Observable<DocListModel>[]=[];


  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService) {
     
   }

 

  
   ngOnInit() {
    this.caseId = this.activatedRoute.snapshot.paramMap.get('id');
    /* this.userService.getDocumentListURL(9).subscribe(respData => {
      var arr=new Array();
      arr=new Array(respData);
      this.docListUrl=[];
      for(var i=0;i<arr.length;i++){
        
          this.docListUrl[i]=Object.assign(new DocListModel, respData[i]);
       }
        
       console.log( "Doc list URL:"+ this.docListUrl);
       
      }); */
    this.userService.getDocumentsViewForIndexDetails(this.caseId).subscribe(respData => {
     
      var arr=new Array();
      arr=new Array(respData);
      this.docListUrl=[];
      for(var i=0;i<arr[0].length;i++){
        
          this.docListUrl[i]=Object.assign(new DocListModel, respData[i]);
       }
        
       console.log( "Doc list URL:"+ this.docListUrl);
     /*  this.docId_1_data = respData[0].docId;
      this.fileUrl_1_data = respData[0].fileUrl;
       this.docId_2_data = respData[1].docId;
       this.docId_3_data = respData[1].docId; */
    });
   }
  
   getInboxDoucmentByDeatilsId1(event :any) {
    this.userService.getInboxDoucmentByDeatilsId(event).subscribe(respData => {
      console.log(respData)
      this.fileUrl_1_data = respData[0].fileUrl;
    });
   }
   getInboxDoucmentByDeatilsId2(event :any) {
    this.userService.getInboxDoucmentByDeatilsId(event).subscribe(respData => {
      console.log(respData)
      this.fileUrl_2_data = respData[0].fileUrl;
    });
   }
   getInboxDoucmentByDeatilsId3(event :any) {
    this.userService.getInboxDoucmentByDeatilsId(event).subscribe(respData => {
      console.log(respData)
      this.fileUrl_3_data = respData[0].fileUrl;
    });
   }


   selectedIdx = 0;
   selectItem(i):void{

    this.selectedIdx = i;
   }

   getClass(i){
     
    var classList='';
    if(this.selectedIdx == i){
       classList = 'active2'; 
    }else if (this.selectedIdx != i){
        classList = 'not-active2';
    }
    return classList;
  }
  getHeadingClass(i){
     
    var headClass='';
    if(this.selectedIdx == i){
       headClass = 'h3class2'; 
    }else if (this.selectedIdx != i){
      headClass = 'not-h3class2';
    }
    return headClass;
  }

}
