import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Modules */
import { TemplatesModule } from './templates/templates.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, TemplatesModule],
  exports: [TemplatesModule],
})
export class ComponentsModule {}
