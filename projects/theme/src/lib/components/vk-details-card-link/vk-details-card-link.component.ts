import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'vk-details-card-link',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './vk-details-card-link.component.html',
  styleUrl: './vk-details-card-link.component.css',
})
export class VkDetailsCardLinkComponent {
  constructor(icons: FaIconLibrary) {
    icons.addIconPacks(fas);
  }
  // @Input() src: string | null =
  //   'https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png';

  @Input() src: string | null = null;
  @Input() alt: string = 'plus icon';

  @Input() icon: string | null = null;

  @Input() width: string = '20';
  @Input() height: string = '20';

  @Input({ required: true }) href: string = '#';
}
