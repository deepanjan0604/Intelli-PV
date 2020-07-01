import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialLayoutRoutingModule } from './initial-layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { RightNavComponent } from './right-nav/right-nav.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent, 
    RightNavComponent, 
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InitialLayoutRoutingModule,
    TranslateModule
  ],
  exports: [
    HeaderComponent, 
    RightNavComponent,
    FooterComponent
  ]
})
export class InitialLayoutModule { }
