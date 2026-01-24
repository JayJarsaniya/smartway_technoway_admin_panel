import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudiesDetailsComponent } from './case-studies-details.component';

describe('CaseStudiesDetailsComponent', () => {
  let component: CaseStudiesDetailsComponent;
  let fixture: ComponentFixture<CaseStudiesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStudiesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseStudiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
