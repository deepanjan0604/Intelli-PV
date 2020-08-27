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
        // Check if the user is logging in for the first time

        return next.handle(this.attachTokenToRequest(request)).pipe(
            tap((event : HttpEvent<any>) => {
/*               var containsUserBody=request.body;
             if( containsUserBody.includes("username")){
              console.log("Auth Interceptor Called Successfully");
             }else{ */
              
                if(event instanceof HttpResponse) 
                {
                    console.log("Auth Interceptor Called Successfully");
                    
                }
              //}
            }),
            catchError((err) : Observable<any> => {
            
                if(err instanceof HttpErrorResponse) {
                    switch((<HttpErrorResponse>err).status) 
                {
                        case 401:
                            console.log("Token expired. Attempting refresh ...");
                            return this.handleHttpResponseError(request, next);
                        case 400:
                            return <any>this.authService.logout();
                    }
                } else 
                {
                    return throwError(this.handleError);
                }
              
            })

           );

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
            return this.authService.getNewRefreshToken().pipe(
                switchMap((tokenresponse: any) => {
                    if(tokenresponse) 
                    {
                        this.tokenSubject.next(tokenresponse.authToken.token); 
                       
                        localStorage.setItem('accessToken', JSON.stringify(tokenresponse));
                         console.log("Token refreshed...");
                        return next.handle(this.attachTokenToRequest(request));

                }
                    return <any>this.authService.logout();
                }),
                catchError(err => {
                    this.authService.logout();
                    return this.handleError(err);
                }),
                finalize(() => {
                  this.isTokenRefreshing = false;
                })
                );

        }
        else 
        {
            this.isTokenRefreshing = false;
            return this.tokenSubject.pipe(filter(token => token != null),
                take(1),
                switchMap(token => {
                return next.handle(this.attachTokenToRequest(request));
                }));
        }


    }


    private attachTokenToRequest(request: HttpRequest<any>) 
    {
     
        var token = localStorage.getItem('accessToken');
      if(token!=null)
        return request.clone({setHeaders: {Authorization: `Bearer ${JSON.parse(token)['access_token']}`}});

        return request;
    }
}