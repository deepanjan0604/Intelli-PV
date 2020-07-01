import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService) {    
    var languages = ["en", "de", "cz", "sk"];
     translate.addLangs(languages);
     translate.setDefaultLang('en');
    
     let browserLang = translate.getBrowserLang();
     console.log('browserLang =========', browserLang);
     translate.use(browserLang.match(/en|de|cz|sk/) ? browserLang : 'en');
   } 
  
   switchLanguage(language: string) {
    this.translate.use(language);
  }
  ngOnInit() {
  }

}
