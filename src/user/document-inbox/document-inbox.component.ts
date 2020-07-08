import { Component, OnInit } from '@angular/core';
import { DocumentViewModel } from 'src/_models/document-view-model';
import { UserService } from 'src/services/user.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-document-inbox',
  templateUrl: './document-inbox.component.html',
  styleUrls: ['./document-inbox.component.css']
})
export class DocumentInboxComponent implements OnInit {

  filterRecords: string;
  isItemsPerPage = 10;
 
  isSelected: boolean[];
  indexObjModel = {
    "pageSize":10,
    "pageNum" : 1
    };
    documentViewForIndexData: any;
  constructor(private userService: UserService,
    private modalService: NgbModal,
    config: NgbModalConfig,) {
      config.backdrop = 'static';
    config.keyboard = true;
     }

  ngOnInit() {  
   this.getDocumentViewForIndex();
  }
   
  getDocumentViewForIndex(){
    this.userService.getDocumentViewForIndex(this.indexObjModel).subscribe(respData => {
      console.log(respData.message);
      if(respData.message === 'Success'){
        debugger
        this.documentViewForIndexData = respData.response;
      }
    });
  }
  openSearchModel(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  clickItemsPerPage(event: any){
    this.isItemsPerPage = event;
  }

}
