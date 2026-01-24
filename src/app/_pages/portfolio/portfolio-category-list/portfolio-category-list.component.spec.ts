import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCategoryListComponent } from './portfolio-category-list.component';

describe('PortfolioCategoryListComponent', () => {
  let component: PortfolioCategoryListComponent;
  let fixture: ComponentFixture<PortfolioCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioCategoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
