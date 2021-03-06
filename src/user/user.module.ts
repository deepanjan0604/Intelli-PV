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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DocumentsDetailsComponent } from './documents-details/documents-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CreateCaseComponent } from './create-case/create-case.component';
import { InitialLayoutModule } from '../initial-layout/initial-layout.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CaseSummaryComponent } from './case-summary/case-summary.component';
import { CaseViewListComponent } from './case-view-list/case-view-list.component';
import { CaseSummaryViewComponent } from './case-summary-view/case-summary-view.component';
import { CaseSummaryViewCtabsComponent } from './case-summary-view-ctabs/case-summary-view-ctabs.component';
import { AuthInterceptor } from 'src/services/auth.interceptor';
import { TranslateModule } from '@ngx-translate/core';
import { CreateCaseViewComponent } from './create-case-view/create-case-view.component';
import { CreateCaseViewCtabsComponent } from './create-case-view-ctabs/create-case-view-ctabs.component';
import { CreateCaseViewRadioComponent } from './create-case-view-radio/create-case-view-radio.component';
import { CreateCaseViewCheckboxComponent } from './create-case-view-checkbox/create-case-view-checkbox.component';
import { CreateCaseViewSelectComponent } from './create-case-view-select/create-case-view-select.component';
import { CreateCaseViewTextareaComponent } from './create-case-view-textarea/create-case-view-textarea.component';
import { CreateCaseViewTextboxComponent } from './create-case-view-textbox/create-case-view-textbox.component';
import { CreateCaseViewDatepickerComponent } from './create-case-view-datepicker/create-case-view-datepicker.component';
import { CreateCaseViewAttachmentComponent } from './create-case-view-attachment/create-case-view-attachment.component';
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
    CaseViewListComponent, 
    CaseSummaryViewComponent, CaseSummaryViewCtabsComponent, CreateCaseViewComponent, CreateCaseViewTextboxComponent, CreateCaseViewRadioComponent, CreateCaseViewCheckboxComponent, CreateCaseViewSelectComponent, CreateCaseViewTextareaComponent, CreateCaseViewDatepickerComponent, CreateCaseViewAttachmentComponent, CreateCaseViewCtabsComponent
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
    BsDatepickerModule,
    TranslateModule
  ],
  exports:[
    DashboardComponent, 
    DocumentInboxComponent, 
    DocumentSentComponent, 
    DocumentRejectComponent, 
    DocumentArchiveComponent,
    DocumentsDetailsComponent,
    CreateCaseComponent,
    CaseViewListComponent
  ],
  entryComponents: [DocumentsDetailsComponent],
  providers: [UserService,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]
})
export class UserModule { }
