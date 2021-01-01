import { Component, OnInit, ChangeDetectionStrategy, NgZone, OnChanges, OnDestroy } from '@angular/core';
import { DocumentViewModel } from 'src/_models/document-view-model';
import { UserService } from 'src/services/user.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-case-view-list',
  templateUrl: './case-view-list.component.html',
  styleUrls: ['./case-view-list.component.css']
})
export class CaseViewListComponent implements OnInit, OnDestroy {

  filterRecords: string;
  isItemsPerPage = 5;
  document_view_records: DocumentViewModel[] = [];
  isSelected: boolean[];
  headerList:any;
  typeIndex:any;
  pageSize:any;
  value:any="5";
  items = [];
  pageOfItems: Array<any>;
  page: number = 1;
  dataVis:boolean=false;

  constructor(private userService: UserService,
    private modalService: NgbModal,
    config: NgbModalConfig, route: ActivatedRoute, private router:Router) {
      config.backdrop = 'static';
    config.keyboard = true;
        this.typeIndex  = parseInt(route.snapshot.params['type']);
        
        this.dataVis=false;
    this.router.events.subscribe((data)=>{
     
     if(data instanceof NavigationEnd ){
      this.document_view_records=[];
      this.typeIndex="";
      this.typeIndex  = parseInt(route.snapshot.params['type']);
      this.getCaseListData();
     }
    })
      }

  ngOnInit() {
  
   
 /*    this.userService.getCaseListData(this.typeIndex).subscribe(respData => {
 
      this.headerList= respData.headerCol;
      this.document_view_records = respData.response;
      //this.value="5";
      this.pageSize=Math.ceil(respData.response.length/parseInt(this.value));
      console.log( respData);
     }); */
  }

  getCaseListData(){
    this.dataVis=false;
    this.userService.getCaseListData(this.typeIndex).subscribe(respData => {
      
      try{
        if(respData.response.length>0){
          this.dataVis=false;
        this.headerList= respData.headerCol;
        this.document_view_records = respData.response;
        //this.value="5";
        this.pageSize=Math.ceil(respData.response.length/parseInt(this.value));
        console.log( respData);
        }else{
          this.dataVis=true;
        }
      }catch(e){
        this.dataVis=true;
        console.log("Error: "+e);
      }
     
     });
    

  }
ngOnDestroy(){

}
  openSearchModel(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  clickItemsPerPage(event: any){
    this.isItemsPerPage = event;
  }
  redirectToURL(data:any){
  
    this.router.navigate(['/user/dashboard'+data.caseNumber]) 

  }
 

}
