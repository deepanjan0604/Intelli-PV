import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';

@NgModule({
  declarations: [
    RegisterComponent, 
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[
    RegisterComponent,
    LoginComponent
  ],
  providers:[AuthService]
})
export class AuthModule { }
