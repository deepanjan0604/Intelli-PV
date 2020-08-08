import { Component, OnInit } from '@angular/core';
import { DocumentViewModel } from 'src/_models/document-view-model';
import { UserService } from 'src/services/user.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-case-view-list',
  templateUrl: './case-view-list.component.html',
  styleUrls: ['./case-view-list.component.css']
})
export class CaseViewListComponent implements OnInit {

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
  

  constructor(private userService: UserService,
    private modalService: NgbModal,
    config: NgbModalConfig, route: ActivatedRoute, private router:Router) {
      config.backdrop = 'static';
    config.keyboard = true;

    this.typeIndex  = parseInt(route.snapshot.params['type']);
     }

  ngOnInit() {
  

    this.userService.getCaseListData(this.typeIndex).subscribe(respData => {
  
      this.headerList= respData.headerCol;
      this.document_view_records = respData.response;
      //this.value="5";
      this.pageSize=Math.ceil(respData.response.length/parseInt(this.value));
      console.log( respData);
     });
  }

  openSearchModel(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  clickItemsPerPage(event: any){
    this.isItemsPerPage = event;
  }
  redirectToURL(data:any){
  
    this.router.navigate(['/user/dashbaord'+data.caseNumber]) 

  }
 

}
