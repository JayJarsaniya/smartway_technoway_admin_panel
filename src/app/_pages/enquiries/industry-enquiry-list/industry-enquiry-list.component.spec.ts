import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryEnquiryListComponent } from './industry-enquiry-list.component';

describe('IndustryEnquiryListComponent', () => {
  let component: IndustryEnquiryListComponent;
  let fixture: ComponentFixture<IndustryEnquiryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustryEnquiryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryEnquiryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
