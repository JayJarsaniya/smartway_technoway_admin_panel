import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogTagListComponent } from './blog-tag-list.component';

const routes: Routes = [{ path: '', component: BlogTagListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogTagListRoutingModule { }
