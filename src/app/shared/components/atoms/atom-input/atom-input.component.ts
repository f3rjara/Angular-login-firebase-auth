import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-atom-input',
  templateUrl: './atom-input.component.html',
  styleUrls: ['./atom-input.component.scss'],
})
export class AtomInputComponent implements OnInit, OnDestroy {
  @Input() formReference!: FormGroup;
  @Input() controlName: string = 'Control name';
  @Input() type: string = 'text';
  @Input() label: string = 'Input label';
  @Input() placeholder: string = 'Input placeholder';
  @Input() errorMessage: string = 'Error message';
  @Input() showPassword: boolean = false;
  @Input() isPasswordConfirm: boolean = false;
  @Output() showPasswordChange = new EventEmitter<boolean>();

  isValidControl: boolean = false;
  isInvalidControl: boolean = false;
  formSubscription!: Subscription;

  constructor() {}

  ngOnInit(): void {
    if (this.formReference.get(this.controlName)) {
      this.formSubscription = this.formReference.valueChanges.subscribe(() => {
        if (this.isPasswordConfirm) {
          this.isValidControl = this.formReference.valid;
          this.isInvalidControl =
            (this.formReference.get(this.controlName)?.invalid &&
              this.formReference.get(this.controlName)?.touched) ||
            this.formReference.hasError('passwordMatchError');
        } else {
          this.isValidControl = this.formReference.get(this.controlName)!.valid;
          this.isInvalidControl =
            this.formReference.get(this.controlName)!.invalid &&
            this.formReference.get(this.controlName)!.touched;
        }
      });
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.showPasswordChange.emit(this.showPassword);
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }
}
