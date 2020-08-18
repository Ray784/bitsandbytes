import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadBlogComponent } from './read-blog.component';

describe('ReadBlogComponent', () => {
  let component: ReadBlogComponent;
  let fixture: ComponentFixture<ReadBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
