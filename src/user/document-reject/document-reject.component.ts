import { Component, OnInit } from '@angular/core';
import { DocumentViewModel } from 'src/_models/document-view-model';
import { UserService } from 'src/services/user.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-document-reject',
  templateUrl: './document-reject.component.html',
  styleUrls: ['./document-reject.component.css']
})
export class DocumentRejectComponent implements OnInit {

  filterRecords: string;
  isItemsPerPage = 10;
  document_view_records: DocumentViewModel[] = [];
  isSelected: boolean[];
  rejectedObjModel = {
    "pageSize":10,
    "pageNum" : 1
    };
    documentViewForRejectedData: any;
  constructor(private userService: UserService,
    private modalService: NgbModal,
    config: NgbModalConfig,) {
      config.backdrop = 'static';
    config.keyboard = true;
     }

  ngOnInit() {
    this.getDocumentViewForRejected();
  }
   
  getDocumentViewForRejected(){
    this.userService.getDocumentViewForRejected(this.rejectedObjModel).subscribe(respData => {
      console.log(respData.message);
      if(respData.message === 'Success'){
        this.documentViewForRejectedData = respData.response;
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
