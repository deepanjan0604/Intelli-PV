import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCaseViewCtabsComponent } from './create-case-view-ctabs.component';

describe('CreateCaseViewCtabsComponent', () => {
  let component: CreateCaseViewCtabsComponent;
  let fixture: ComponentFixture<CreateCaseViewCtabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCaseViewCtabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCaseViewCtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
