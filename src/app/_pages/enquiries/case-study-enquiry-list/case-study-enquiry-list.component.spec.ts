import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyEnquiryListComponent } from './case-study-enquiry-list.component';

describe('CaseStudyEnquiryListComponent', () => {
  let component: CaseStudyEnquiryListComponent;
  let fixture: ComponentFixture<CaseStudyEnquiryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStudyEnquiryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStudyEnquiryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
