import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEnquiryListComponent } from './user-enquiry-list.component';

describe('UserEnquiryListComponent', () => {
  let component: UserEnquiryListComponent;
  let fixture: ComponentFixture<UserEnquiryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEnquiryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEnquiryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
