import { Component, ElementRef, Input } from '@angular/core';
import { atomButton, dummyAtomButton } from '@interfaces/atom-button.interface';

@Component({
  selector: 'app-atom-button',
  templateUrl: './atom-button.component.html',
  styleUrls: ['./atom-button.component.scss'],
})
export class AtomButtonComponent {
  @Input() atomButton: atomButton = dummyAtomButton;
  @Input() atomButtonDisbaled: boolean = false;

  get children() {
    return (this as any).elementRef.nativeElement.children;
  }

  constructor(private elementRef: ElementRef) {}
}
