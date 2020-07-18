import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { Observable } from 'rxjs';
import { ConfigurationModel } from 'src/object-model/configuration-model';

@Component({
  selector: 'app-case-summary',
  templateUrl: './case-summary.component.html',
  styleUrls: ['./case-summary.component.css']
})
export class CaseSummaryComponent implements OnInit {
  caseId: Observable<string>;
  med_watch_src = "../../assets/pdf/FDA-3500_11-26-2019_1.pdf";
  lab_test_watch_src = "../../assets/pdf/FDA-3500_11-26-2019_3.pdf";
  ecg_watch_src = "../../assets/pdf/FDA-3500_11-26-2019_3.pdf";
 

  configModel:Observable<ConfigurationModel>;

  onSubmit() {
    return false;
  }


  constructor(route: ActivatedRoute, private userService: UserService) {
    this.caseId  = route.snapshot.params['id'];
    
    }

  ngOnInit() {
    this.userService.getCaseListSummary(this.caseId).subscribe(respData => {
     
       this.configModel=Object.assign(new ConfigurationModel, respData.configuration);
        console.log( respData);
       });
  }
}
