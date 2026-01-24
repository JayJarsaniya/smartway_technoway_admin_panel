import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEnquiryListComponent } from './service-enquiry-list.component';

describe('ServiceEnquiryListComponent', () => {
  let component: ServiceEnquiryListComponent;
  let fixture: ComponentFixture<ServiceEnquiryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceEnquiryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEnquiryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
