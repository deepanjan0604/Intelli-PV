import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentInboxComponent } from './document-inbox.component';

describe('DocumentInboxComponent', () => {
  let component: DocumentInboxComponent;
  let fixture: ComponentFixture<DocumentInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
