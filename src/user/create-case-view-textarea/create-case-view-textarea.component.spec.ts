import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCaseViewTextareaComponent } from './create-case-view-textarea.component';

describe('CreateCaseViewTextareaComponent', () => {
  let component: CreateCaseViewTextareaComponent;
  let fixture: ComponentFixture<CreateCaseViewTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCaseViewTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCaseViewTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
