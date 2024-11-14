import { Component, Input } from '@angular/core';
import { VkButtonComponent } from '../vk-button/vk-button.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'vk-dropdown',
  standalone: true,
  imports: [VkButtonComponent, FontAwesomeModule],
  templateUrl: './vk-dropdown.component.html',
  styleUrl: './vk-dropdown.component.css',
})
export class VkDropdownComponent {
  constructor(icons: FaIconLibrary) {
    icons.addIconPacks(fas);
  }

  @Input() label: string = 'Dropdown';

  @Input() color: string = 'blue';
  @Input() position: string = 'default';

  dropdown: boolean = false;

  toggleDropdown() {
    this.dropdown = !this.dropdown;
  }
}
