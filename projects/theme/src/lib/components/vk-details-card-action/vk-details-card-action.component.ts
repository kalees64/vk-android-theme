import { Component, Input } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'vk-details-card-action',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './vk-details-card-action.component.html',
  styleUrl: './vk-details-card-action.component.css',
})
export class VkDetailsCardActionComponent {
  constructor(icons: FaIconLibrary) {
    icons.addIconPacks(fas);
  }
  // @Input() src: string | null =
  //   'https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png';
  @Input() src: string | null = null;
  @Input() alt: string = 'plus icon';

  @Input() width: string = '20';
  @Input() height: string = '20';
  @Input() icon: string | null = null;
}
