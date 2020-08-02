import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { Observable } from 'rxjs';
import { ConfigurationModel } from 'src/object-model/configuration-model';
import { DocListModel } from 'src/object-model/document-list-model';
import * as $AB from 'jquery';
import { TabListsModel } from 'src/object-model/tab-list-model';


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
  
//  configModel:Observable<ConfigurationModel>;
configModel:ConfigurationModel;
  
docList:Observable<DocListModel>[];
  docListUrl:Observable<DocListModel>[];
  //configModel['tabList']:Observable<TabListsModel>[]=[];
  caseSum:boolean=false;

  onSubmit() {
    return false;
  }


  constructor(route: ActivatedRoute, private userService: UserService) {
    
    this.caseId  = route.snapshot.params['id'];
        }

  ngOnInit() {
    this.userService.getCaseListSummary(this.caseId).subscribe(respData => {
  debugger;
       this.configModel=Object.assign(new ConfigurationModel, respData['configuration']);
       this.caseSum=true;
        console.log( respData);
       });
       this.userService.getDocumentList(this.caseId,0).subscribe(respData => {
        
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
          for(var i=0;i<arr[0].length;i++){
            
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

   selectedIdx = 0;
   selectItem(i):void{
     debugger;
    this.selectedIdx = i;
   }

   getClass(i){
     
    var classList='';
    if(this.selectedIdx == i){
       classList = 'active'; 
    }else if (this.selectedIdx != i){
        classList = 'not-active';
    }
    return classList;
  }

   
}







