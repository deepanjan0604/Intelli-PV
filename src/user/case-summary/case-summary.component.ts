import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { Observable } from 'rxjs';
import { ConfigurationModel } from 'src/object-model/configuration-model';
import { DocListModel } from 'src/object-model/document-list-model';

@Component({
  selector: 'app-case-summary',
  templateUrl: './case-summary.component.html',
  styleUrls: ['./case-summary.component.css']
})
export class CaseSummaryComponent implements OnInit {
  caseId: Observable<string>;
  med_watch_src = "../../assets/pdf/FDA-3500_11-26-2019_1.pdf";
  lab_test_watch_src = "../../assets/pdf/FDA-3500_11-26-2019_3.pdf";
  ecg_watch_src = "../../assets/pdf/FDA-3500_11-26-2019_3.pdf";
 
  @ViewChild('ctdTabset') ctdTabset;
  
  configModel:Observable<ConfigurationModel>;
  docList:Observable<DocListModel>[];
  docListUrl:Observable<DocListModel>[];

  onSubmit() {
    return false;
  }


  constructor(route: ActivatedRoute, private userService: UserService) {
    
    this.caseId  = route.snapshot.params['id'];
        }

  ngOnInit() {
    this.userService.getCaseListSummary(this.caseId).subscribe(respData => {
     
       this.configModel=Object.assign(new ConfigurationModel, respData.configuration);
        console.log( respData);
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
          debugger;
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

  ngAfterViewInit() {
    this.switchNgBTab('tab1');
  }

   switchNgBTab(id: string) {
     this.ctdTabset.select(id);
   }
}
