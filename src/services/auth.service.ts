import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public baseUrl: string = environment.baseUrl;
  public headers: HttpHeaders = new HttpHeaders();

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  
  constructor(private http: HttpClient) {
    this.headers = this.headers
    .append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8')
    .append('Authorization', 'Basic '+btoa('ipv:1pv!'));

      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
   }
   public get currentUserValue() {
    return this.currentUserSubject.value;
}

login(userCredentials:any): Observable<any> {
	


    return this.http.post<any>('https://gateway-ipv.herokuapp.com/IPV/oauth/token', userCredentials.toString(), { headers: this.headers })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        })).pipe(catchError(this.errorHandler));
}

logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}
   getInboxDoucmentByDeatilsId(documentId: any){
    return this.http.get(this.baseUrl + 'doc/url/'+documentId, {headers: this.headers}).pipe(catchError(this.errorHandler));
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
