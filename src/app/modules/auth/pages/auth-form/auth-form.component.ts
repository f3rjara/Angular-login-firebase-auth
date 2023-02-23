import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatcher } from '@shared/helpers/passwordMatch';
import {
  atomicImage,
  dumy_atomicImage,
} from '@interfaces/atom-image.interface';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AuthFormComponent {
  showRegisterForm: boolean = false;
  showPassword: boolean = false;
  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  authForm: FormGroup;
  iniciarSesionImage: atomicImage = dumy_atomicImage;
  iniciarSesionImageMobile: atomicImage = dumy_atomicImage;
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

    this.iniciarSesionImage = {
      ngSrc: 'assets/images/iniciar_sistema.webp',
      class: 'main__picture--image',
      width: 600,
      height: 600,
      alt: 'Iniciar sesión',
      aria: 'Iniciar sesión',
      priority: true,
    };
    this.iniciarSesionImageMobile = {
      ...this.iniciarSesionImage,
      class: 'main__form--image',
      width: 300,
      height: 300,
    };
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
