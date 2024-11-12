import { Component, Input } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'vk-header-user',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './vk-header-user.component.html',
  styleUrl: './vk-header-user.component.css',
})
export class VkHeaderUserComponent {
  constructor(icons: FaIconLibrary) {
    icons.addIconPacks(fas);
  }

  @Input() src: string | null = null;
  @Input() alt: string | null = null;
  @Input() icon: string | null = null;
}
