import { Component, OnInit } from '@angular/core';
import { DocumentViewModel } from 'src/_models/document-view-model';
import { UserService } from 'src/services/user.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-document-sent',
  templateUrl: './document-sent.component.html',
  styleUrls: ['./document-sent.component.css']
})
export class DocumentSentComponent implements OnInit {

  filterRecords: string;
  isItemsPerPage = 10;
  document_view_records: DocumentViewModel[] = [];
  isSelected: boolean[];

  constructor(private userService: UserService,
    private modalService: NgbModal,
    config: NgbModalConfig,) {
      config.backdrop = 'static';
    config.keyboard = true;
     }

  ngOnInit() {
    this.userService.getDocumentView().subscribe(respData => {
     this.document_view_records = respData;
    });

   
  }

  openSearchModel(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  clickItemsPerPage(event: any){
    this.isItemsPerPage = event;
  }

}
