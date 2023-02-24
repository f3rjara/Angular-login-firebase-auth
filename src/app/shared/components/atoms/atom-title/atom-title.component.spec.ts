import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderTitle } from '@interfaces/atom-header.interface';
import { AtomTitleComponent } from './atom-title.component';

describe('AtomTitleComponent', () => {
  let component: AtomTitleComponent;
  let fixture: ComponentFixture<AtomTitleComponent>;
  const dummyAtomTitle: HeaderTitle = {
    level: 'h1',
    value: 'Atomic Title Component',
    class: 'atomicTitle--h1',
    id: 'atomicTitle--h1',
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomTitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AtomTitleComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display the corresponding headerTitle when headerTitleObject is provided', () => {
    component.headerTitle = dummyAtomTitle;
    fixture.detectChanges();
    const titleElement = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(titleElement.textContent.trim()).toBe('Atomic Title Component');
  });

  it('should receive headerTitle in @Input', () => {
    component.headerTitle = dummyAtomTitle;
    fixture.detectChanges();
    expect(component.headerTitle).toEqual(dummyAtomTitle);
  });
});
