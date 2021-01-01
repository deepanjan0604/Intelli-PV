import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCaseViewTextboxComponent } from './create-case-view-textbox.component';

describe('CreateCaseViewTextboxComponent', () => {
  let component: CreateCaseViewTextboxComponent;
  let fixture: ComponentFixture<CreateCaseViewTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCaseViewTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCaseViewTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
