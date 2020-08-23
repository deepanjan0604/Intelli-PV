import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UserService } from 'src/services/user.service';
import $ from 'jquery';
@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.css']
})
export class RightNavComponent implements OnInit {
  caseviewFoldersList: any;
  showLi:boolean=false;
  constructor(private ref: ChangeDetectorRef , private userService: UserService) {
    this.ref.markForCheck();
   }

  ngOnInit() {
    this.userService.getCaseviewFoldersList().subscribe(respData => {
     this.caseviewFoldersList =  respData
    },err=>{
      debugger;
    });

     }

   ngInitDiv(){
     this.showLi=true;
     console.log("Div Initialization");
   }
  }


