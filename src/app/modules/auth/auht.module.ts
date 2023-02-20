import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AuhtRoutingModule } from './auht-routing.module';
import { AuthFormComponent } from './pages/auth-form/auth-form.component';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [CommonModule, NgOptimizedImage, AuhtRoutingModule],
})
export class AuhtModule {}
