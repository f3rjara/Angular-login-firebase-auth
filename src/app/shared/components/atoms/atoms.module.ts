import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AtomImageComponent } from './atom-image/atom-image.component';
import { AtomTitleComponent } from './atom-title/atom-title.component';

@NgModule({
  declarations: [AtomImageComponent, AtomTitleComponent],
  imports: [CommonModule, NgOptimizedImage],
  exports: [AtomImageComponent, AtomTitleComponent],
})
export class AtomsModule {}
