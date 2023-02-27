import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AtomImageComponent } from './atom-image/atom-image.component';
import { AtomTitleComponent } from './atom-title/atom-title.component';
import { AtomButtonComponent } from './atom-button/atom-button.component';

@NgModule({
  declarations: [AtomImageComponent, AtomTitleComponent, AtomButtonComponent],
  imports: [CommonModule, NgOptimizedImage],
  exports: [AtomImageComponent, AtomTitleComponent, AtomButtonComponent],
})
export class AtomsModule {}
