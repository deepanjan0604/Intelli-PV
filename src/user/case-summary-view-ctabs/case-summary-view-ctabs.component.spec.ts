import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSummaryViewCtabsComponent } from './case-summary-view-ctabs.component';

describe('CaseSummaryViewCtabsComponent', () => {
  let component: CaseSummaryViewCtabsComponent;
  let fixture: ComponentFixture<CaseSummaryViewCtabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseSummaryViewCtabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSummaryViewCtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
