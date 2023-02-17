import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuhtRoutingModule } from './auht-routing.module';
import { AuthFormComponent } from './pages/auth-form/auth-form.component';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [CommonModule, AuhtRoutingModule],
})
export class AuhtModule {}
