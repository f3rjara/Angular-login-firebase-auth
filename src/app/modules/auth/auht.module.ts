import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ComponentsModule } from '@components/components.module';
import { AuhtRoutingModule } from './auht-routing.module';
import { AuthFormComponent } from './pages/auth-form/auth-form.component';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [
    CommonModule,
    AuhtRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    AngularSvgIconModule.forRoot(),
  ],
})
export class AuhtModule {}
