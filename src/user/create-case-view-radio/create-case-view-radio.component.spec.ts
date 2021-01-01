import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCaseViewRadioComponent } from './create-case-view-radio.component';

describe('CreateCaseViewRadioComponent', () => {
  let component: CreateCaseViewRadioComponent;
  let fixture: ComponentFixture<CreateCaseViewRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCaseViewRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCaseViewRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
