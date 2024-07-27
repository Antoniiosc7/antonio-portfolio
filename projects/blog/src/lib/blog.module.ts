import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogExampleComponent } from './blog-example/blog-example.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, BlogExampleComponent],
  exports: [BlogExampleComponent]
})
export class BlogModule { }
