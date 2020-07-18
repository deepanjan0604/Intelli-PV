import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSummaryViewComponent } from './case-summary-view.component';

describe('CaseSummaryViewComponent', () => {
  let component: CaseSummaryViewComponent;
  let fixture: ComponentFixture<CaseSummaryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseSummaryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSummaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
