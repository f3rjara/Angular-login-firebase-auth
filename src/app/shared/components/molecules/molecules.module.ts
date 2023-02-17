import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Modules */
import { AtomsModule } from './../atoms/atoms.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AtomsModule],
  exports: [AtomsModule],
})
export class MoleculesModule {}
