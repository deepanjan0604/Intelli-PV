import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCaseViewDatepickerComponent } from './create-case-view-datepicker.component';

describe('CreateCaseViewDatepickerComponent', () => {
  let component: CreateCaseViewDatepickerComponent;
  let fixture: ComponentFixture<CreateCaseViewDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCaseViewDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCaseViewDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
