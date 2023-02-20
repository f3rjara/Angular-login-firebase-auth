import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthFormComponent } from './pages/auth-form/auth-form.component';

const routes: Routes = [
  {
    path: '',
    component: AuthFormComponent,
    pathMatch: 'full',
  },
  {
    path: 'recuperar-acceso',
    component: AuthFormComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuhtRoutingModule {}
