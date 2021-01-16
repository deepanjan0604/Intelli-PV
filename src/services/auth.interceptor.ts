import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, pipe, throwError } from 'rxjs';
import {  tap, catchError, switchMap, finalize, filter, take } from 'rxjs/operators';
import { AuthService } from './auth.service';





@Injectable({
  providedIn: 'root'
})


    export class AuthInterceptor implements HttpInterceptor {

    private isTokenRefreshing: boolean = false;

    tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    constructor (private authService : AuthService) {}

    intercept(request : HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>> 
    {

        if (this.authService.getAccessToken()) {
            request = this.attachTokenToRequest(request, this.authService.getAccessToken());
          }
      
        // Check if the user is logging in for the first time

        return <any>next.handle(request).pipe(

            catchError(err=>{
              
                if(err instanceof HttpErrorResponse) {
                    switch((<HttpErrorResponse>err).status) 
                {
                        case 401:
                            console.log("Token expired. Attempting refresh ...");
                            return this.handleHttpResponseError(request, next);
                                       
                        case 400:
                            return ;//<any>this.authService.logout();
                           
                        case 500:
                             throwError(this.handleError500);
                             //return <any>this.authService.logout();
                    }
                } else 
                {
                    return throwError(this.handleError);
                }
              
            }

           ));

    }


    // Global error handler method 
    private handleError(errorResponse : HttpErrorResponse) 
    {
        let errorMsg : string;

        if(errorResponse.error instanceof Error) 
        {
             // A client-side or network error occurred
            errorMsg = "An error occured : " + errorResponse.error.message;
        } else 
        {
            // The backend returned an unsuccessful response code
        errorMsg = `Backend returned code ${errorResponse.status}, body was: ${errorResponse.error}`;
        }
        //<any>this.authService.logout();
         return throwError(errorMsg);
    }

    // Global error handler method 
    private handleError500(errorResponse : HttpErrorResponse) 
    {
        let errorMsg : string;

        if(errorResponse.error instanceof Error) 
        {
             // A client-side or network error occurred
            errorMsg = "An error occured : " + errorResponse.error.message;
        } else 
        {
            // The backend returned an unsuccessful response code
        errorMsg = `Backend returned code ${errorResponse.status}, body was: ${errorResponse.error}`;
        }
       // <any>this.authService.logout();
         return throwError(errorMsg);
    }

   
    private handleHttpResponseError(request : HttpRequest<any>, next : HttpHandler)
    {

      
        if(!this.isTokenRefreshing)  // If the Token Refresheing is not true
        {
            this.isTokenRefreshing = true;

            // Any existing value is set to null
            this.tokenSubject.next(null);
          
            /// call the API to refresh the token
            

            return <any>this.authService.getNewRefreshToken().pipe(
                switchMap((tokenresponse: any) => {
                    
                    if(tokenresponse) 
                    {   
                        this.isTokenRefreshing = false;
                        this.tokenSubject.next(tokenresponse); 
                       
                        localStorage.setItem('accessToken', JSON.stringify(tokenresponse));
                         console.log("Token refreshed...");
                        return next.handle(this.attachTokenToRequest(request,tokenresponse));

                }
                  
                })).pipe(catchError(this.handleError));
        }
        else 
        {
            this.isTokenRefreshing = false;
            return this.tokenSubject.pipe(filter(token => token != null),
                take(1),
                switchMap(token => {
                return next.handle(this.attachTokenToRequest(request, token));
                }));
        }


    } 


     private attachTokenToRequest(request: HttpRequest<any>, token:any) 
    {
      
       // var token = localStorage.getItem('accessToken');
      if(token!=null && !request.url.includes("oauth/token"))
        return <any>request.clone({setHeaders: {Authorization: `Bearer ${JSON.parse(token)['access_token']}`}});
        else if(request.url.includes("oauth/token"))
        return <any>request.clone({setHeaders: {Authorization: 'Basic '+btoa('ipv:1pv!')}});
        return <any>request;
    }
}