import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCaseViewComponent } from './create-case-view.component';

describe('CreateCaseViewComponent', () => {
  let component: CreateCaseViewComponent;
  let fixture: ComponentFixture<CreateCaseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCaseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCaseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
