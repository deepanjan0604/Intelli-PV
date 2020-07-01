import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UserService } from 'src/services/user.service';
@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RightNavComponent implements OnInit {
  caseviewFoldersList: any;
  constructor(private ref: ChangeDetectorRef , private userService: UserService) {
    this.ref.markForCheck();
   }

  ngOnInit() {
    this.userService.getCaseviewFoldersList().subscribe(respData => {
     this.caseviewFoldersList =  respData
    });
   }
  }


