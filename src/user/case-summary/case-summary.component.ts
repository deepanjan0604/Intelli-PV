import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { Observable } from 'rxjs';
import { ConfigurationModel } from 'src/object-model/configuration-model';
import { DocListModel } from 'src/object-model/document-list-model';
import * as $AB from 'jquery';
import { TabListsModel } from 'src/object-model/tab-list-model';
import { AuthService } from 'src/services/auth.service';


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
  docListUrl:Observable<DocListModel>[]=[];
  //configModel['tabList']:Observable<TabListsModel>[]=[];
  caseSum:boolean=false;

  onSubmit() {
    return false;
  }


  constructor(route: ActivatedRoute, private userService: UserService, private authService:AuthService) {
    
    this.caseId  = route.snapshot.params['id'];
        }

  ngOnInit() {
    this.userService.getCaseListSummary(this.caseId).subscribe(respData => {
       this.configModel=Object.assign(new ConfigurationModel, respData['configuration']);
       this.caseSum=true;
        console.log( respData);
        
       }, err=>{
        this.authService.logout();
        window.close();
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
        }
       
        }, err=>{
          this.authService.logout();
          //window.close();
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
       
      },err=>{
        this.authService.logout();
        //window.close();
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
  getHeadingClass(i){
     
    var headClass='';
    if(this.selectedIdx == i){
       headClass = 'h3class'; 
    }else if (this.selectedIdx != i){
      headClass = 'not-h3class';
    }
    return headClass;
  }
   
}







