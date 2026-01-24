import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoPageListComponent } from './seo-page-list.component';

describe('SeoPageListComponent', () => {
  let component: SeoPageListComponent;
  let fixture: ComponentFixture<SeoPageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeoPageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeoPageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
