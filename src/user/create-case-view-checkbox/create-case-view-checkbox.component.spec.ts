import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCaseViewCheckboxComponent } from './create-case-view-checkbox.component';

describe('CreateCaseViewCheckboxComponent', () => {
  let component: CreateCaseViewCheckboxComponent;
  let fixture: ComponentFixture<CreateCaseViewCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCaseViewCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCaseViewCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
