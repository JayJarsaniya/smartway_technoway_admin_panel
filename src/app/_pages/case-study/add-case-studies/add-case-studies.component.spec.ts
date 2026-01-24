import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCaseStudiesComponent } from './add-case-studies.component';

describe('AddCaseStudiesComponent', () => {
  let component: AddCaseStudiesComponent;
  let fixture: ComponentFixture<AddCaseStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCaseStudiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
