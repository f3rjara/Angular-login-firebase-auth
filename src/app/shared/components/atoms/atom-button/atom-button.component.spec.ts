import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { atomButton } from '@interfaces/atom-button.interface';
import { AtomButtonComponent } from './atom-button.component';

describe('AtomButtonComponent', () => {
  let component: AtomButtonComponent;
  let fixture: ComponentFixture<AtomButtonComponent>;
  const dummyAtomButton: atomButton = {
    title: 'Atomic Button Component',
    id: 'atomicButton--h1',
    alt: 'Atomic Button Component',
    class: 'atomicButton--h1',
    aria: 'Atomic Button Component',
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('AtomButtonComponent --> should create', () => {
    expect(component).toBeTruthy();
  });

  it('AtomButtonComponent --> should show default text if ng-content is empty', () => {
    const buttonElement: HTMLElement = fixture.debugElement.query(
      By.css('button')
    ).nativeElement;
    component.children[0].textContent = 'Button Working!';
    expect(buttonElement.textContent?.trim()).toBe('Button Working!');
  });

  it('AtomButtonComponent --> should apply button class', () => {
    const buttonClass = 'test-class';
    component.atomButton = {
      class: buttonClass,
      title: 'Test title',
      aria: 'Test aria',
    };
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(
      buttonElement.nativeElement.classList.contains(buttonClass)
    ).toBeTrue();
  });

  it('AtomButtonComponent --> should disable button', () => {
    component.atomButtonDisbaled = true;
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.nativeElement.disabled).toBeTrue();
  });

  it('AtomButtonComponent --> should set button title', () => {
    const buttonTitle = 'Test title';
    component.atomButton = {
      class: 'test-class',
      title: buttonTitle,
      aria: 'Test aria',
    };
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.nativeElement.getAttribute('title')).toBe(buttonTitle);
  });

  it('AtomButtonComponent --> should set button aria-label', () => {
    const buttonAria = 'Test aria';
    component.atomButton = {
      class: 'test-class',
      title: 'Test title',
      aria: buttonAria,
    };
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.nativeElement.getAttribute('aria-label')).toBe(
      buttonAria
    );
  });
});
