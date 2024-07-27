import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogExampleComponent } from './blog-example.component';

describe('BlogExampleComponent', () => {
  let component: BlogExampleComponent;
  let fixture: ComponentFixture<BlogExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
