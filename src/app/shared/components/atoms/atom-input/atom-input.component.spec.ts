import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AtomInputComponent } from './atom-input.component';

describe('AtomInputComponent', () => {
  let component: AtomInputComponent;
  let fixture: ComponentFixture<AtomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomInputComponent],
      imports: [AngularSvgIconModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('AtomInputComponent --> should create', () => {
    const component = new AtomInputComponent();
    expect(component).toBeTruthy();
    expect(component.controlName).toEqual('Control name');
    expect(component.type).toEqual('text');
    expect(component.label).toEqual('Input label');
    expect(component.placeholder).toEqual('Input placeholder');
    expect(component.errorMessage).toEqual('Error message');
    expect(component.showPassword).toBeFalsy();
    expect(component.isPasswordConfirm).toBeFalsy();
  });

  it('AtomInputComponent --> should update isValidControl and isInvalidControl when form value changes', () => {
    const pattern: RegExp = /^^[a-zA-Z0-9]{6,}$/;
    const formGroup = new FormGroup({
      testControl: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(pattern),
      ]),
    });
    const component = new AtomInputComponent();
    component.formReference = formGroup;
    component.controlName = 'testControl';
    component.ngOnInit();
    expect(component.isValidControl).toBeFalsy();
    expect(component.isInvalidControl).toBeFalsy();
    // value invalidated
    formGroup.controls['testControl'].setValue('test');
    expect(component.isValidControl).toBeFalsy();
    expect(component.isInvalidControl).toBeFalsy();
    // value validated
    formGroup.controls['testControl'].setValue('test123');
    expect(component.isValidControl).toBeTruthy();
    expect(component.isInvalidControl).toBeFalsy();
    // value empty
    formGroup.controls['testControl'].setValue('');
    expect(component.isValidControl).toBeFalsy();
    expect(component.isInvalidControl).toBeFalsy();
  });

  it('AtomInputComponent --> should emit showPasswordChange event when togglePasswordVisibility is called', () => {
    const component = new AtomInputComponent();
    spyOn(component.showPasswordChange, 'emit');
    component.togglePasswordVisibility();
    expect(component.showPassword).toBeTruthy();
    expect(component.showPasswordChange.emit).toHaveBeenCalledWith(true);
    component.togglePasswordVisibility();
    expect(component.showPassword).toBeFalsy();
    expect(component.showPasswordChange.emit).toHaveBeenCalledWith(false);
  });

  it('AtomInputComponent --> should unsubscribe from form valueChanges and destroy Subject when component is destroyed', () => {
    const formGroup = new FormGroup({
      testControl: new FormControl(),
    });
    const component = new AtomInputComponent();
    component.formReference = formGroup;
    component.controlName = 'testControl';
    component.ngOnInit();
    spyOn(component.destroy$, 'next');
    spyOn(component.destroy$, 'complete');
    component.ngOnDestroy();
    expect(component.destroy$.next).toHaveBeenCalled();
    expect(component.destroy$.complete).toHaveBeenCalled();
  });
});
