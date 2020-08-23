import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 public baseUrl: string = environment.baseUrl;
 public baseurl1:string= environment.baseUrl1;
 public context:string= environment.context;
  public headers: HttpHeaders = new HttpHeaders();
  public headers1: HttpHeaders = new HttpHeaders();
public authorizationToken:any="";
  constructor(private http: HttpClient, private authService: AuthService) {
    this.authorizationToken=this.authService.checkCredentials().toString();
    this.headers = this.headers
      .append('Accept', 'application/json')
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer '+this.authorizationToken);
      this.headers1 = this.headers1
      .append('Accept', 'application/json')
      .append('Content-Type', 'application/json')
      //.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
      .append('Authorization', 'Bearer '+this.authorizationToken);
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
    return this.http.get(this.baseUrl + 'doc/inbox/'+docColletionID).pipe(catchError(this.errorHandler));
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
      //.append('Access-Control-Allow-Origin','http://18.224.1.69:8080')
      //.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
      .append('enterpriseid','3')
      .append('country','dummy')
      .append('reporter','PU')
      .append('land','EN')
      .append('loggedinuser','pvi.admin@pvi.vom')
      .append('Authorization', 'Bearer '+this.authorizationToken);;
   


    //return this.http.get<any>(this.baseurl1+this.context + '/getCaseSummary/'+caseId, {headers: this.headers1}).pipe(catchError(this.errorHandler));
    return this.http.get<any>(this.baseurl1+ '/getCaseSummary/'+caseId, {headers: this.headers1}).pipe(catchError(this.errorHandler));

   //return this.http.get<any>('./assets/case-summary.json').pipe(catchError(this.errorHandler));
  }

   getDocumentList(caseId:any,type:any){
    return this.http.get(this.baseUrl + 'doc/docId/'+caseId+'/'+type).pipe(catchError(this.errorHandler));
  }
  getDocumentListURL(docId:any){
    return this.http.get(this.baseUrl + 'doc/url/'+docId).pipe(catchError(this.errorHandler));
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
