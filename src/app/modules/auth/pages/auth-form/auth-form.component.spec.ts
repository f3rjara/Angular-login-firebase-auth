import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AuthFormComponent } from './auth-form.component';

describe('AuthFormComponent', () => {
  let component: AuthFormComponent;
  let fixture: ComponentFixture<AuthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthFormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AngularSvgIconModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('AuthFormComponent --> should create', () => {
    expect(component).toBeTruthy();
  });

  it('AuthFormComponent --> should create a form with email and password fields', () => {
    const component = new AuthFormComponent(new FormBuilder());
    expect(component.authForm.contains('email')).toBeTruthy();
    expect(component.authForm.contains('password')).toBeTruthy();
  });

  it('AuthFormComponent --> should require a valid email', () => {
    const component = new AuthFormComponent(new FormBuilder());
    const controlEmail = component.authForm.get('email');
    controlEmail?.setValue('test');
    expect(controlEmail?.valid).toBeFalsy();
    // if controlEmail is null, then the test will fail
    controlEmail?.setValue('');
    expect(controlEmail?.valid).toBeFalsy();
    // if controlEmail is accepted, then the test will pass
    controlEmail?.setValue('usuario@correo.com');
    expect(controlEmail?.valid).toBeTruthy();
  });

  it('AuthFormComponent --> should require a password with at least 6 characters', () => {
    const component = new AuthFormComponent(new FormBuilder());
    const controlPassword = component.authForm.get('password');
    controlPassword?.setValue('12345');
    expect(controlPassword?.valid).toBeFalsy();
    // if controlPassword is null, then the test will fail
    controlPassword?.setValue('  5  5');
    expect(controlPassword?.valid).toBeFalsy();
    // if controlPassword is accepted, then the test will pass
    controlPassword?.setValue('123456');
    expect(controlPassword?.valid).toBeTruthy();
  });

  it('AuthFormComponent --> should toggle password visibility', () => {
    const component = new AuthFormComponent(new FormBuilder());
    const controlPassword = component.authForm.get('password');
    component.showPasswordChange(false);
    expect(component.showPassword).toBeFalsy();
    if (controlPassword instanceof HTMLInputElement) {
      expect(controlPassword.type).toEqual('password');
    }
    component.showPasswordChange(true);
    expect(component.showPassword).toBeTruthy();
    if (controlPassword instanceof HTMLInputElement) {
      expect(controlPassword.type).toEqual('text');
    }
  });

  it('AuthFormComponent --> should toggle register form and add or remove passwordConfirm control', () => {
    const component = new AuthFormComponent(new FormBuilder());
    expect(component.showRegisterForm).toBeFalsy();
    expect(component.authForm.contains('passwordConfirm')).toBeFalsy();

    component.actionAuth();
    expect(component.showRegisterForm).toBeTruthy();
    expect(component.authForm.contains('passwordConfirm')).toBeTruthy();

    component.actionAuth();
    expect(component.showRegisterForm).toBeFalsy();
    expect(component.authForm.contains('passwordConfirm')).toBeFalsy();
  });
});
