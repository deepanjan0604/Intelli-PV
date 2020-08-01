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
  docListUrl:Observable<DocListModel>[];

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

    this.userService.getDocumentList(456,0).subscribe(respData => {
        
      var arr1=new Array();
      arr1=new Array(respData);
      this.docList=[];
      for(var i=0;i<arr1.length;i++){
        
          this.docList[i]=Object.assign(new DocListModel, respData[i]);
       }
        


       console.log( "Doc list:"+ this.docList);
       var id=respData[0].docId
       this.userService.getDocumentListURL(id).subscribe(respData => {
       
        var arr=new Array();
        arr=new Array(respData);
        this.docListUrl=[];
        for(var i=0;i<arr.length;i++){
          
            this.docListUrl[i]=Object.assign(new DocListModel, respData[i]);
         }
          
         console.log( "Doc list URL:"+ this.docListUrl);
         
        });
      
      });
  }

}
