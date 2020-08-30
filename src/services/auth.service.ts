import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError, BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public baseUrl: string = environment.baseUrl;
  public headers: HttpHeaders = new HttpHeaders();

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  
  constructor(private http: HttpClient,private router: Router) {
    try{
    this.headers = this.headers
    .append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8')
    .append('Authorization', 'Basic '+btoa('ipv:1pv!'));

      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
      }catch(err){
        console.log("Error_Bad_Request")
      }
   }
   public get currentUserValue() {
    return this.currentUserSubject.value;
}

login(params:any) {

    return this.http.post<any>(this.baseUrl+'oauth/token', params.toString(), { headers: this.headers })
        .pipe(map(data => {
        
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('accessToken', JSON.stringify(data));
            this.currentUserSubject.next(data);
            return data;
        })).pipe(catchError(this.errorHandler));
}

logout() {
    // remove user from local storage and set current user to null
    
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
    window.sessionStorage.removeItem('token')
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login'])  
}

getAccessToken() {
  return localStorage.getItem('accessToken');
}

checkCredentials() {
  try{
   var accessToken={};
  accessToken=JSON.parse(localStorage.getItem('accessToken'));
  if(accessToken !=null && accessToken !="" &&accessToken !=undefined){
  if(accessToken["access_token"] != undefined && accessToken["access_token"] != null && accessToken["access_token"] != "")
  return accessToken["access_token"];
  else{
  return "";}}else{this.router.navigate(['/auth/login']);return "";  }
  }catch(err){

    console.log("Error_Bad_Request");
    
  }
} 


getNewRefreshToken(){

  var refreshtoken=localStorage.getItem('accessToken');
  let refresh_token=JSON.parse(refreshtoken)['refresh_token']
  var accesstoken=localStorage.getItem('accessToken');
  let access_token=JSON.parse(refreshtoken)['access_token']
  const grantType = "refresh_token";
  let params = new URLSearchParams;
     params.append('grant_type',grantType);
     params.append('client_id','ipv');
     params.append('client_secret','1pv!');
     params.append('refresh_token',refresh_token);
     
     var headers1=new HttpHeaders();
     headers1= headers1.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8')
     .append('Authorization', 'Basic '+btoa('ipv:1pv!'));
     const  modifiedheaders =headers1;
      return this.http.post<any>(this.baseUrl+'oauth/token', params.toString(), { headers: this.headers })
      .pipe(data=>{
 
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('accessToken', JSON.stringify(data));
        this.currentUserSubject.next(data);
        return <any>data;
      });
}



checkRefreshTokeCredentials(){
  try{
    var accessToken={};
   accessToken=JSON.parse(localStorage.getItem('accessToken'));

   if(accessToken !=null && accessToken !="" &&accessToken !=undefined){
   if(accessToken["refresh_token"] != undefined && accessToken["refresh_token"] != null && accessToken["refresh_token"] != "")
   return accessToken["refresh_token"];
   else{
   return "";}}else{this.router.navigate(['/auth/login']);return "";  }
   }catch(err){
 
     console.log("Error_Bad_Request");
     
   }

}
/*    getInboxDoucmentByDeatilsId(documentId: any){
    return this.http.get(this.baseUrl + 'doc/url/'+documentId, {headers: this.headers}).pipe(catchError(this.errorHandler));
  } */
/*   refreshAccessToken(params:any){

    return this.http.post<any>(this.baseUrl+'oauth/token', params.toString(), { headers: this.headers })
    .pipe(map(data => {
    
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('accessToken', JSON.stringify(data));
        this.currentUserSubject.next(data);
        return data;
    })).pipe(catchError(this.errorHandler));
  }
 */
  errorHandler(respError: HttpErrorResponse | any) {
    if (respError.error instanceof ErrorEvent) {
      console.error('Client Side Error: ',  respError);
    } else {
      console.error('Server Side Error: ', respError);
    }
    return throwError(respError || 'Server Downgrade Error');
  }
  
}
