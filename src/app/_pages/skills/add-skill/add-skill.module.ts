import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddSkillRoutingModule } from './add-skill-routing.module';
import { AddSkillComponent } from './add-skill.component';

@NgModule({
  declarations: [
    AddSkillComponent
  ],
  imports: [
    CommonModule,
    AddSkillRoutingModule,
    FormsModule
  ]
})
export class AddSkillModule { }