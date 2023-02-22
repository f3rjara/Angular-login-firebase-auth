import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AuhtRoutingModule } from './auht-routing.module';
import { AuthFormComponent } from './pages/auth-form/auth-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [
    CommonModule,
    NgOptimizedImage,
    AuhtRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule.forRoot(),
  ],
})
export class AuhtModule {}
