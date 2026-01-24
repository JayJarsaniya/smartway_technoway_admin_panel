import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTagListComponent } from './portfolio-tag-list.component';

describe('PortfolioTagListComponent', () => {
  let component: PortfolioTagListComponent;
  let fixture: ComponentFixture<PortfolioTagListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioTagListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
