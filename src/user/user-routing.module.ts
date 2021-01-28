import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentInboxComponent } from './document-inbox/document-inbox.component';
import { DocumentsDetailsComponent } from './documents-details/documents-details.component';
import { CreateCaseComponent } from './create-case/create-case.component';
import { CaseSummaryComponent } from './case-summary/case-summary.component';
import { CaseViewListComponent } from './case-view-list/case-view-list.component';
import { DocumentRejectComponent } from './document-reject/document-reject.component';
import { DocumentSentComponent } from './document-sent/document-sent.component';
import { DocumentArchiveComponent } from './document-archive/document-archive.component';
import { DocumentViewModel } from 'src/_models/document-view-model';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'document-details/:id', component: DocumentsDetailsComponent},
  {path: 'inbox', component: DocumentInboxComponent},
  {path: 'sent', component: DocumentSentComponent},
  {path: 'rejected', component: DocumentRejectComponent},
  {path: 'archive', component: DocumentArchiveComponent},
  {path: 'create-case/:op/:id', component: CreateCaseComponent},
  {path: 'case-summary/:id', component: CaseSummaryComponent},
  {path:'case-view/:type', component: CaseViewListComponent},
  {path:'doc-view', component: DocumentsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
