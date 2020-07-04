import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  
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
