import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  isClicked=false;
  invalidCredentials=false;
  message:String="";

  constructor(private formBuilder: FormBuilder,
    private router: Router, private authService: AuthService, private ngZone:NgZone ) { 
    

    }

  ngOnInit() {
 
    this.authService.logout();
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
  });
  }

      // convenience getter for easy access to form fields
      get f() { return this.loginForm.controls; }

  onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
		
		  let params = new URLSearchParams();
     params.append('username',this.loginForm.get('email').value);
     params.append('password',this.loginForm.get('password').value);    
     params.append('grant_type','password');
     params.append('client_id','ipv');
     params.append('client_secret','1pv!');
    this.isClicked=true;
   
          this.authService.login(params).subscribe(respData => {
          
           console.log(respData);
           //localStorage.setItem('userInfo', JSON.stringify(this.loginForm.value));
           //window.sessionStorage.setItem('token', JSON.stringify(respData));
           //this.router.navigate(['/user/dashboard'])  
           this.ngZone.run(() => this.router.navigateByUrl('/user/dashboard'))
           this.ngZone.run(() => this.router.navigateByUrl('/user/create-case/393'))

         },err => {
          
        this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required]],
          password: ['', [Validators.required]],
      });
          
           this.invalidCredentials=true;this.isClicked=false;

          console.log('Login Failed, Bad Credentials !!');
          this.authService.logout();
          
        }); 
      }

      clearData(){

        this.invalidCredentials=false;this.isClicked=false;
      }
}
