import { Component, Input } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'vk-modal',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './vk-modal.component.html',
  styleUrl: './vk-modal.component.css',
})
export class VkModalComponent {
  constructor(icons: FaIconLibrary) {
    icons.addIconPacks(fas);
  }

  @Input() position: string = 'top';

  modal: boolean = false;

  openModal() {
    this.modal = true;
  }

  closeModal() {
    this.modal = false;
  }
}
