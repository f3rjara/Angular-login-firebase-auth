import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatcher } from '@shared/helpers/passwordMatch';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  showRegisterForm: boolean = false;
  showPassword: boolean = false;
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  authForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.authForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this.emailPattern),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  actionAuth(): boolean {
    this.showRegisterForm = !this.showRegisterForm;
    if (this.showRegisterForm) {
      this.authForm.addControl(
        'passwordConfirm',
        this.formBuilder.control('', [
          Validators.required,
          Validators.minLength(6),
        ])
      );
      this.authForm.setValidators([
        passwordMatcher('password', 'passwordConfirm'),
      ]);
    } else {
      this.authForm.clearValidators();
      this.authForm.updateValueAndValidity();
      this.authForm.removeControl('passwordConfirm');
    }
    this.authForm.reset();
    this.showPassword = false;
    return this.showRegisterForm;
  }

  submitAuthForm(): void {
    console.log(this.authForm.value);
  }
}
