import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import Stepper from 'bs-stepper';
import { UserService } from 'src/services/user.service';
import { DocListModel } from 'src/object-model/document-list-model';
import { AuthService } from 'src/services/auth.service';
import { TabListsModel } from 'src/object-model/tab-list-model';
import { takeWhile } from 'rxjs/operators';
import { RuleBasedModel } from 'src/object-model/rulebased-model';
import { CtabsModel } from 'src/object-model/multiple-support-ctabs-model';
import { ConfigurationModel } from 'src/object-model/configuration-model';
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
  configData:Observable<ConfigurationModel>;
  @Input() tabList:Observable<TabListsModel>[];
  tabListData:Observable<TabListsModel>;
  ruleBasedModelData:RuleBasedModel;
  tabDataVis:boolean=false;
  tabID:any;
  addTab:boolean=false;
  tabListDataonAddTab:TabListsModel[];
  currentIndex:any=0;
  clicked:boolean=false;

  

 /*  med_watch_src = "../../assets/pdf/FDA-3500_11-26-2019_1.pdf";
  lab_test_watch_src = "../../assets/pdf/FDA-3500_11-26-2019_3.pdf";
  ecg_watch_src = "../../assets/pdf/FDA-3500_11-26-2019_3.pdf";
 */

  next() {
    this.stepper.next();
  }

  onSubmit() {
    return false;
  }




  constructor(route: ActivatedRoute, private userService:UserService, private authService:AuthService,private cd : ChangeDetectorRef) {
    this.caseId  = route.snapshot.params['id'];
    debugger
    if(this.tabList == undefined){
      this.tabList=[];
    this.userService.getTabList().subscribe(respData => {
      this.configData=Object.assign(new ConfigurationModel, respData);
      for(var i=0;i<respData.tabList.length;i++){
        this.tabList[i]=Object.assign(new TabListsModel, respData.tabList[i]);
        this.tabList[i]['window']=[];
        this.tabList[i]['cTabs']=[];
        console.log("Tab "+i);
        
       
      }
      var tablist=new TabListsModel();
      Object.assign(tablist,this.tabList[0]);//tablist.id

      this.tabID=tablist.id

      this.ruleBasedModelData=new RuleBasedModel();
      this.ruleBasedModelData.tabId=-1;
      this.ruleBasedModelData.ruleObject=[];
      this.ruleBasedModelData.ruleObject[0]={criteriaId:"PRD",values:[]};
      this.ruleBasedModelData.ruleObject[1]={criteriaId:"AE",values:[]};
      this.ruleBasedModelData.ruleObject[2]={criteriaId:"REP",values:[]};
      

      this.userService.getTabListData(this.tabID).subscribe(respData => {
       
       this.tabListData=Object.assign(new TabListsModel, respData);
       this.tabDataVis=true;
       debugger
           }, err=>{
        //this.authService.logout();
        
      });
     }, err=>{
       //this.authService.logout();
      
     });

    }
 
 
    }

  ngOnInit() {
   
    
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    });

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
    }, err=>{
      //this.authService.logout();
      
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
loadTab(id:any){
  this.saveTabData(this.tabListData['id'])
  this.clicked=false;
  debugger
  this.tabListDataonAddTab=[];
  this.addTab=false;
this.tabID=id;


if(this.tabList[id]['canMultiple']==false){
  if(this.tabList[id]['window'].length==0){
this.userService.getTabListData(this.tabList[id]['id']).subscribe(respData => {
       debugger
  this.tabListData=Object.assign(new TabListsModel, respData);
  this.tabDataVis=true;
  
      }, err=>{
  // this.authService.logout();
   
 }); 
}else{
  this.tabListData=Object.assign(new TabListsModel, this.tabList[this.tabID]);
}
}else{
  this.tabListData=Object.assign(new TabListsModel, this.tabList[this.tabID]);
  this.cd.detectChanges();
}
}

onAddTab(){
  this.clicked=true;
  debugger
 this.tabListDataonAddTab=[];
 var tabListdata=new TabListsModel();
 Object.assign(tabListdata,this.tabListData);
  this.tabID=tabListdata.id;
  this.userService.getTabListData(this.tabID).subscribe(respData => {
    debugger;
    this.tabListDataonAddTab=Object.assign(new TabListsModel, respData);
    this.addTab=true;
    this.clicked=false;
  
        }, err=>{
    // this.authService.logout();
   });
}

onTabSubmit(tabData:any){
debugger
var tablstData=new TabListsModel();
var success=false;
Object.assign(tablstData,this.tabListData)
var criteria=tabData.window[0].sectionList[0].fieldList[0].criteriaId;
if(criteria.includes("REP")){
  criteria="REP";
}
switch(criteria){
  case "PRD":
    if(tabData.window[0].sectionList[0].fieldList[0].val == null || tabData.window[0].sectionList[0].fieldList[0].val == "")
    alert("Enter Product Name");
    else
    success=true;
   
    break;
    case "AE":
      if(tabData.window[0].sectionList[0].fieldList[0].val == null || tabData.window[0].sectionList[0].fieldList[0].val == "")
    alert("Enter Event Name");
    else
    success=true;
    
      break;
      case "REP":
        if(tabData.window[0].sectionList[0].fieldList[0].val == null || tabData.window[0].sectionList[0].fieldList[1].val == null || tabData.window[0].sectionList[0].fieldList[2].val == null || tabData.window[0].sectionList[0].fieldList[0].val == "" || tabData.window[0].sectionList[0].fieldList[1].val == "" || tabData.window[0].sectionList[0].fieldList[2].val == "")
    alert("Enter Reporter Details");
    else
    success=true;
    
        break;
}
if(success==true){
  this.ruleBasedModelData=this.buildRuleBasedJSON(tabData,tablstData);
  this.userService.getRuleBasedQues(tablstData.id,this.ruleBasedModelData).subscribe(respData => {
    debugger;
    var flag=false;
    var selectedIdxs=-1;
  if(respData!=null && respData!=undefined){
    this.addTab=false;
    var tablst=[];
    Object.assign(tablst,this.tabList);
    for(var i=0;i<tablst.length;i++){
      if(tablst[i].id=== this.tabListData['id']){
        selectedIdxs=i;
        if(tablst[i].canMultiple==true){
          var Ctabs=Object.assign(new CtabsModel(),respData);
          var len3=tablst[i].cTabs.length
          if(len3>0){
            for(var j=0;j<tablst[i].cTabs.length;j++){
              if(tablst[i].cTabs['id']== Ctabs['id']){
                flag=true;
                break;
              }
            }
            if(flag==false)
            tablst[i].cTabs.push(Ctabs);
          }
          else{
            tablst[i].cTabs.push(Ctabs);
          }
        }

      }

    }
    Object.assign(this.tabList,tablst);
    this.loadTab(selectedIdxs);
  }
  
        }, err=>{
    // this.authService.logout();
   });
}


}

buildRuleBasedJSON(tabData:TabListsModel,tablstData:TabListsModel){
  debugger
  var ruleBasedModeldata=new RuleBasedModel();
  ruleBasedModeldata=this.ruleBasedModelData;
  ruleBasedModeldata.tabId=tablstData.id;
  var len=ruleBasedModeldata.ruleObject.length;
 
   
      var criteria=tabData.window[0].sectionList[0].fieldList[0].criteriaId;
      if(criteria.includes("REP")){
        criteria="REP";
      }
      switch(criteria){
        case "PRD":
          ruleBasedModeldata.ruleObject[0].criteriaId="PRD";
          ruleBasedModeldata.ruleObject[0].values.push(tabData.window[0].sectionList[0].fieldList[0].val);
          break;
          case "AE":
          ruleBasedModeldata.ruleObject[1].criteriaId="AE";
          ruleBasedModeldata.ruleObject[1].values.push(tabData.window[0].sectionList[0].fieldList[0].val);
          break;
          case "REP":
          ruleBasedModeldata.ruleObject[2].criteriaId="REP";
          ruleBasedModeldata.ruleObject[2].values.push("RC:"+tabData.window[0].sectionList[0].fieldList[2].val+";FN:"+tabData.window[0].sectionList[0].fieldList[0].val+";LN:"+tabData.window[0].sectionList[0].fieldList[1].val);
          break;
      }

      this.ruleBasedModelData=ruleBasedModeldata;
    
  
  return this.ruleBasedModelData;
}

saveTabData(id:any){
  this.clicked=true;
  debugger;
this.tabID=id;
for(var i=0;i<this.tabList.length;i++){
  if(this.tabList[i]['id']==this.tabID && this.tabList[i]['canMultiple']==false){
  this.tabList[i]['window'][0]=(this.tabListData['window'][0]);
  break;
  }
}
this.clicked=false;
}



onSubmitCase(){
  this.clicked=true;
  this.configData['tabList']=this.tabList
  this.userService.saveCaseData(this.configData).subscribe(respData => {
    debugger;
    this.clicked=false;
    //Redirection to Ack
    alert("Submitted Successfully")
        }, err=>{
          this.clicked=false;
    // this.authService.logout();
   });

}

}
