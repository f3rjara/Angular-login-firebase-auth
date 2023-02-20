import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  public showRegisterForm: boolean = false;
  constructor() {}

  actionAuth(): boolean {
    this.showRegisterForm = !this.showRegisterForm;
    return this.showRegisterForm;
  }
}
