import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private authService: AuthService) { }

  ngOnInit() {
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
        //const formData = new FormData();
        //formData.append('username', this.loginForm.get('email').value);
        //formData.append('password', this.loginForm.get('password').value);
        //formData.append('grant_type', "password");
        //formData.append('client_id', 'ipv');
		
		let params = new URLSearchParams();
		params.append('username',this.loginForm.get('email').value);
		params.append('password',this.loginForm.get('password').value);    
		params.append('grant_type','password');
		params.append('client_id','ipv');
		
		
        // this.authService.login(params).subscribe(respData => {
        //   console.log(respData);
        // });
        // localStorage.setItem('userInfo', JSON.stringify(this.loginForm.value));
        this.router.navigate(['/user/dashbaord'])  
    }
}
