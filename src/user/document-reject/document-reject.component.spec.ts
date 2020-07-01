import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentRejectComponent } from './document-reject.component';

describe('DocumentRejectComponent', () => {
  let component: DocumentRejectComponent;
  let fixture: ComponentFixture<DocumentRejectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentRejectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
