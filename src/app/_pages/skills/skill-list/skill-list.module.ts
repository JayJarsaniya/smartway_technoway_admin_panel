import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SkillListRoutingModule } from './skill-list-routing.module';
import { SkillListComponent } from './skill-list.component';

@NgModule({
  declarations: [
    SkillListComponent
  ],
  imports: [
    CommonModule,
    SkillListRoutingModule,
    FormsModule
  ]
})
export class SkillListModule { }