import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Modules */
import { MoleculesModule } from './../molecules/molecules.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MoleculesModule],
  exports: [MoleculesModule],
})
export class OrganimsModule {}
