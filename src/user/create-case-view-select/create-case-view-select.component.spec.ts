import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCaseViewSelectComponent } from './create-case-view-select.component';

describe('CreateCaseViewSelectComponent', () => {
  let component: CreateCaseViewSelectComponent;
  let fixture: ComponentFixture<CreateCaseViewSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCaseViewSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCaseViewSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
