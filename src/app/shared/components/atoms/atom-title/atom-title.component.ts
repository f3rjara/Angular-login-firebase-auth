import { Component, Input } from '@angular/core';
import {
  dummyHeaderTitle,
  HeaderTitle,
} from '@interfaces/atom-header.interface';

@Component({
  selector: 'app-atom-title',
  templateUrl: './atom-title.component.html',
  styleUrls: ['./atom-title.component.scss'],
})
export class AtomTitleComponent {
  @Input() headerTitle: HeaderTitle = dummyHeaderTitle;
}
