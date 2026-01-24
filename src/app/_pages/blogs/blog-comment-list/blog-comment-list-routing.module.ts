import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogCommentListComponent } from './blog-comment-list.component';

const routes: Routes = [{ path: '', component: BlogCommentListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogCommentListRoutingModule { }
