import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerEnquiryListComponent } from './career-enquiry-list.component';

describe('CareerEnquiryListComponent', () => {
  let component: CareerEnquiryListComponent;
  let fixture: ComponentFixture<CareerEnquiryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerEnquiryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerEnquiryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
