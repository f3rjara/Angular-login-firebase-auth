import { AbstractControl } from '@angular/forms';

export function passwordMatcher(password: string, passwordConfirm: string) {
  return (form: AbstractControl) => {
    const passwordControl = form.get(password)
      ? form.get(password)?.value
      : null;
    const passwordConfirmControl = form.get(passwordConfirm)
      ? form.get(passwordConfirm)?.value
      : null;

    if (passwordControl == null && passwordConfirmControl == null) {
      return null;
    }
    if (passwordControl === passwordConfirmControl) {
      return null;
    }

    return { passwordMatchError: true };
  };
}
