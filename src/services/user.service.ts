import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import { RuleBasedModel } from 'src/object-model/rulebased-model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 public baseUrl: string = environment.baseUrl;
 public baseurl1:string= environment.baseUrl1;
 public context:string= environment.context;
  public headers: HttpHeaders = new HttpHeaders();
  public headers1: HttpHeaders = new HttpHeaders();
  public headers3: HttpHeaders = new HttpHeaders();
  public submitJson:FormData=new FormData();
public authorizationToken:any="";
  constructor(private http: HttpClient, private authService: AuthService) {
    try{
    this.authorizationToken=this.authService.checkCredentials().toString();
    this.headers = this.headers
      .append('Accept', 'application/json')
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer '+this.authorizationToken);
      this.headers1 = this.headers1
      .append('Accept', 'application/json')
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer '+this.authorizationToken);

    }catch(err){
      console.log("Error_Bad_Request")
    }
   }

   /**
   * @method UserLogout
   * @author Deepanjan Mal
   */
  getDocumentView(): Observable<any> {
    return this.http.get<any>('./assets/document-view.json')
      .pipe(catchError(this.errorHandler));
  }

  getDocumentViewForIndex(objModel: any):  Observable<any> {
    
    return this.http.post<any>(this.baseUrl + 'doc/fetch/inbox', objModel, {headers: this.headers})
      .pipe(catchError(this.errorHandler));
  }

  getDocumentViewForRejected(objModel: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'doc/fetch/rejected', objModel, {headers: this.headers})
      .pipe(catchError(this.errorHandler));
  }

  getDocumentsViewForIndexDetails(docColletionID: any): Observable<any>{
    return this.http.get(this.baseUrl + 'doc/inbox/'+docColletionID,{headers: this.headers}).pipe(catchError(this.errorHandler));
  }

  getInboxDoucmentByDeatilsId(documentId: any){
    return this.http.get(this.baseUrl + 'doc/url/'+documentId, {headers: this.headers}).pipe(catchError(this.errorHandler));
  }
  getCaseviewFoldersList(){
    return this.http.get(this.baseUrl + 'case/categories/list', {headers: this.headers}).pipe(catchError(this.errorHandler));
  }

  getCaseListData(type:any){
    return this.http.post<any>(this.baseUrl + 'case/list/'+type,  {"pageSize":10,"pageNum" : 1}
      , {headers: this.headers})
      .pipe(catchError(this.errorHandler));
  }

  getCaseListSummary(caseId:any){
   
    this.headers1 = this.headers1
      .append('Accept', 'application/json')
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer '+this.authorizationToken);
   


    //return this.http.get<any>(this.baseurl1+this.context + '/getCaseSummary/'+caseId, {headers: this.headers1}).pipe(catchError(this.errorHandler));
    return this.http.get<any>(this.baseurl1+ '/getCaseSummary/'+caseId, {headers: this.headers1}).pipe(catchError(this.errorHandler));

   //return this.http.get<any>('./assets/case-summary.json').pipe(catchError(this.errorHandler));
  }

   getDocumentList(caseId:any,type:any){
    return this.http.get(this.baseUrl + 'doc/docId/'+caseId+'/'+type,{headers: this.headers}).pipe(catchError(this.errorHandler));
  }
  getDocumentListURL(docId:any){
    return this.http.get(this.baseUrl + 'doc/url/'+docId,{headers: this.headers}).pipe(catchError(this.errorHandler));
  }


  getTabList() {
    
    this.headers3 = this.headers3
    .append('Accept', 'application/json')
    .append('Content-Type', 'application/json')
    //.append('Authorization', 'Bearer '+this.authorizationToken)
/*  .append('lang', 'en')
    .append('reporter', 'PU')
    .append('country', 'AU')
    .append('loggedInUser', 'ipv.admin@ipv.com')
    .append('enterpriseId', '3')
    .append('ipAddress', '10.2.2.56')
    .append('hostUrl', 'http://localhost:8080')
    .append('reportID', '132'); */
    return this.http.post<any>(this.baseurl1+'/getTabList',{}, {headers: this.headers3})
      .pipe(catchError(this.errorHandler));
  }


  getTabListData(id: any){
  
    this.headers3 = new HttpHeaders();
    this.headers3 = this.headers3
    .append('Accept', 'application/json')
    .append('Content-Type', 'application/json')
    //.append('Authorization', 'Bearer '+this.authorizationToken)
/*  .append('lang', 'en')
    .append('reporter', 'PU')
    .append('country', 'AU')
    .append('loggedInUser', 'ipv.admin@ipv.com')
    .append('enterpriseId', '3')
    .append('ipAddress', '10.2.2.56')
    .append('hostUrl', 'http://localhost:8080')
    .append('reportID', '132'); */
    return this.http.post<any>(this.baseurl1+'/getTabListData/'+id,{}, {headers: this.headers3})
      .pipe(catchError(this.errorHandler));
  }


  getRuleBasedQues(id: any,ruleBasedModel: RuleBasedModel){
  
    this.headers3 = new HttpHeaders();
    this.headers3 = this.headers3
    .append('Accept', 'application/json')
    .append('Content-Type', 'application/json')
    //.append('Authorization', 'Bearer '+this.authorizationToken)
/*  .append('lang', 'en')
    .append('reporter', 'PU')
    .append('country', 'AU')
    .append('loggedInUser', 'ipv.admin@ipv.com')
    .append('enterpriseId', '3')
    .append('ipAddress', '10.2.2.56')
    .append('hostUrl', 'http://localhost:8080')
    .append('reportID', '132'); */
    return this.http.post<any>(this.baseurl1+'/getRuleBasedQuestionnaire/',ruleBasedModel, {headers: this.headers3})
      .pipe(catchError(this.errorHandler));
  }


  saveCaseData(caseData: any):Observable<any>{
    caseData=JSON.stringify(caseData);

    let submitJson1:FormData=new FormData();
    submitJson1.append('questionnaire',caseData);
    submitJson1.append('submitType','1');

    
    this.headers3 = new HttpHeaders();
    this.headers3 = this.headers3
    .append('Accept', '*/*')
/*     .append('lang', 'en')
    .append('reporter', 'PU')
    .append('country', 'AU')
    .append('loggedInUser', 'ipv.admin@ipv.com')
    .append('enterpriseId', '3')
    .append('ipAddress', '10.2.2.56')
    .append('hostUrl', 'http://localhost:8080')
    .append('reportID', '132')
    .append('userName', 'test'); */
    return this.http.post<any>(this.baseurl1+'/saveCaseData',submitJson1, {headers: this.headers3})
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(respError: HttpErrorResponse | any) {
    if (respError.error instanceof ErrorEvent) {
      console.error('Client Side Error: ',  respError);
    } else {
      console.error('Server Side Error: ', respError);
    }
    return throwError(respError || 'Server Downgrade Error');
  }
}


