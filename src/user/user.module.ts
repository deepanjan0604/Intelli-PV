import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from '../services/user.service';
import { DocumentInboxComponent } from './document-inbox/document-inbox.component';
import { DocumentSentComponent } from './document-sent/document-sent.component';
import { DocumentRejectComponent } from './document-reject/document-reject.component';
import { DocumentArchiveComponent } from './document-archive/document-archive.component';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';  
import { Ng2SearchPipeModule } from 'ng2-search-filter';  
import { HttpClientModule } from '@angular/common/http';
import { DocumentsDetailsComponent } from './documents-details/documents-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CreateCaseComponent } from './create-case/create-case.component';
import { InitialLayoutModule } from '../initial-layout/initial-layout.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CaseSummaryComponent } from './case-summary/case-summary.component';
import { CaseViewListComponent } from './case-view-list/case-view-list.component';
@NgModule({
  declarations: [
    DashboardComponent, 
    DocumentInboxComponent, 
    DocumentSentComponent, 
    DocumentRejectComponent, 
    DocumentArchiveComponent, 
    DocumentsDetailsComponent, 
    CreateCaseComponent, 
    CaseSummaryComponent, 
    CaseViewListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NgbModule,
    PdfViewerModule,
    InitialLayoutModule,
    BsDatepickerModule 
  ],
  exports:[
    DashboardComponent, 
    DocumentInboxComponent, 
    DocumentSentComponent, 
    DocumentRejectComponent, 
    DocumentArchiveComponent,
    DocumentsDetailsComponent,
    CreateCaseComponent, 
    CaseSummaryComponent,
    CaseViewListComponent
  ],
  entryComponents: [DocumentsDetailsComponent],
  providers: [UserService]
})
export class UserModule { }
