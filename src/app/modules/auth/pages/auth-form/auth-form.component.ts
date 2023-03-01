import { HeaderTitle } from './../../../../shared/interfaces/atom-header.interface';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatcher } from '@shared/helpers/passwordMatch';
import {
  atomicImage,
  dummyAtomicImage,
} from '@interfaces/atom-image.interface';
import { atomButton } from '@src/app/shared/interfaces/atom-button.interface';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AuthFormComponent {
  showRegisterForm: boolean = false;
  showPassword: boolean = false;
  emailPattern: RegExp = /^^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  passwordPattern: RegExp = /^^[a-zA-Z0-9]{6,}$/;
  titlePrimary: HeaderTitle = {
    level: 'h1',
    value: 'Iniciar sesión',
    class: 'main__title',
  };
  authActionButton: atomButton = {
    title: 'Inicia sesión',
    id: 'auth__btnAction--login',
    alt: 'Inicia sesión',
    class: 'btn__action--submit',
    aria: 'Inicia sesión',
  };
  authForm: FormGroup;
  iniciarSesionImage: atomicImage = dummyAtomicImage;
  iniciarSesionImageMobile: atomicImage = dummyAtomicImage;

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
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(this.passwordPattern),
        ],
      ],
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
      this.titlePrimary.value = 'Crear cuenta';
    } else {
      this.authForm.clearValidators();
      this.authForm.updateValueAndValidity();
      this.authForm.removeControl('passwordConfirm');
      this.titlePrimary.value = 'Iniciar sesión';
    }
    this.authForm.reset();
    this.showPassword = false;
    return this.showRegisterForm;
  }

  showPasswordChange(showPassword: boolean): void {
    this.showPassword = showPassword;
  }

  submitAuthForm(): void {
    console.log(this.authForm.value);
    console.log(this.authActionButton);
  }
}
