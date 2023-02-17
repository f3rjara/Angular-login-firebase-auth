import { OrganimsModule } from './../organims/organims.module';
import { NgModule } from '@angular/core';
/* Modules */
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, OrganimsModule],
  exports: [OrganimsModule],
})
export class TemplatesModule {}
