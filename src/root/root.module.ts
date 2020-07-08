import { NgModule } from '@angular/core';
import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient }    from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
/* export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient,'assets/i18n/', '.json');
} */
@NgModule({
  declarations: [RootComponent],
  imports: [
    BrowserModule,
    RootRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    PdfViewerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BsDatepickerModule.forRoot(),
  ],
  providers: [ {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [RootComponent]
})
export class RootModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
