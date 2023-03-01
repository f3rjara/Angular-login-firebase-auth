import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AtomImageComponent } from './atom-image/atom-image.component';
import { AtomTitleComponent } from './atom-title/atom-title.component';
import { AtomButtonComponent } from './atom-button/atom-button.component';
import { AtomInputComponent } from './atom-input/atom-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [
    AtomImageComponent,
    AtomTitleComponent,
    AtomButtonComponent,
    AtomInputComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule.forRoot(),
  ],
  exports: [
    AtomImageComponent,
    AtomTitleComponent,
    AtomButtonComponent,
    AtomInputComponent,
  ],
})
export class AtomsModule {}
