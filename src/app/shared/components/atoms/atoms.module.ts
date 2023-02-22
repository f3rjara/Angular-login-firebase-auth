import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AtomImageComponent } from './atom-image/atom-image.component';

@NgModule({
  declarations: [AtomImageComponent],
  imports: [CommonModule, NgOptimizedImage],
  exports: [AtomImageComponent],
})
export class AtomsModule {}
