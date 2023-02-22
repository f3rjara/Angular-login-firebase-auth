import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgOptimizedImage } from '@angular/common';
import { By } from '@angular/platform-browser';
import { AtomImageComponent } from './atom-image.component';
import { atomicImage } from '@interfaces/atom-image.interface';

describe('AtomImageComponent', () => {
  let component: AtomImageComponent;
  let fixture: ComponentFixture<AtomImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomImageComponent],
      imports: [NgOptimizedImage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AtomImageComponent ', () => {
    expect(component).toBeTruthy();
  });

  it('should display the corresponding atomImage when atomicImageObject is provided', () => {
    component.atomicImageObject = {
      ngSrc: 'https://picsum.photos/200/300',
      width: 200,
      height: 300,
      alt: 'Atomic Image Component',
      class: 'atomicImage--img',
      aria: 'Atomic Image Component',
      priority: false,
    };
    fixture.detectChanges();
    const imgElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(imgElement.src).toBe('https://picsum.photos/200/300');
  });

  it('should receive atomicImageObject @Input', () => {
    const image: atomicImage = {
      ngSrc: 'https://picsum.photos/200/300',
      width: 200,
      height: 300,
      alt: 'Atomic Image Component',
      class: 'atomicImage--img',
      aria: 'Atomic Image Component',
      priority: false,
    };
    component.atomicImageObject = image;
    fixture.detectChanges();
    expect(component.atomicImageObject).toEqual(image);
  });
});
