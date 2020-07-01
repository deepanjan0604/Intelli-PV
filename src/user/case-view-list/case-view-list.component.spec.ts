import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseViewListComponent } from './case-view-list.component';

describe('CaseViewListComponent', () => {
  let component: CaseViewListComponent;
  let fixture: ComponentFixture<CaseViewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseViewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
