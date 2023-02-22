import { Component, Input } from '@angular/core';
import {
  atomicImage,
  dumy_atomicImage,
} from '@interfaces/atom-image.interface';

@Component({
  selector: 'app-atom-image',
  templateUrl: './atom-image.component.html',
  styleUrls: ['./atom-image.component.scss'],
})
export class AtomImageComponent {
  @Input() atomicImageObject: atomicImage = dumy_atomicImage;
  constructor() {}
}
