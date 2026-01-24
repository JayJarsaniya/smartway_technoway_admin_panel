import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTagListComponent } from './blog-tag-list.component';

describe('BlogTagListComponent', () => {
  let component: BlogTagListComponent;
  let fixture: ComponentFixture<BlogTagListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogTagListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
