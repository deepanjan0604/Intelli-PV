import { Component, OnInit } from '@angular/core';
import { DocumentViewModel } from 'src/_models/document-view-model';
import { UserService } from 'src/services/user.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-case-view-list',
  templateUrl: './case-view-list.component.html',
  styleUrls: ['./case-view-list.component.css']
})
export class CaseViewListComponent implements OnInit {

  filterRecords: string;
  isItemsPerPage = 10;
  document_view_records: DocumentViewModel[] = [];
  isSelected: boolean[];
  headerList:any;
  typeIndex:any;
  

  constructor(private userService: UserService,
    private modalService: NgbModal,
    config: NgbModalConfig, route: ActivatedRoute) {
      config.backdrop = 'static';
    config.keyboard = true;

    this.typeIndex  = parseInt(route.snapshot.params['type']);
     }

  ngOnInit() {
  

    this.userService.getCaseListData(this.typeIndex).subscribe(respData => {
     
      this.headerList= respData.headerCol;
      this.document_view_records = respData.response;
      console.log( respData);
     });
   
  }

  openSearchModel(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  clickItemsPerPage(event: any){
    this.isItemsPerPage = event;
  }

}
