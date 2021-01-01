import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, NgZone } from '@angular/core';
import { UserService } from 'src/services/user.service';
import $ from 'jquery';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RightNavComponent implements OnInit {
  caseviewFoldersList: any;
  showLi:boolean=false;
  constructor(private ref: ChangeDetectorRef , private userService: UserService, private router:Router, private ngZone:NgZone) {
    this.ref.markForCheck();
     this.router.events.subscribe(()=>{
      //debugger;
      //this.ngOnInit();
    }) 
   }

  ngOnInit() {
    this.userService.getCaseviewFoldersList().subscribe(respData => {
     this.caseviewFoldersList =  respData
    },err=>{
      
    });
     }

   ngInitDiv(){
     this.showLi=true;
     console.log("Div Initialization");
   }

   loadListItem(id:any){
      this.ngZone.run(() => this.router.navigateByUrl('/user/case-view/'+id))
  
      }
  }


