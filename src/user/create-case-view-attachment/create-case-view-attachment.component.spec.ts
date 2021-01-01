import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCaseViewAttachmentComponent } from './create-case-view-attachment.component';

describe('CreateCaseViewAttachmentComponent', () => {
  let component: CreateCaseViewAttachmentComponent;
  let fixture: ComponentFixture<CreateCaseViewAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCaseViewAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCaseViewAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
