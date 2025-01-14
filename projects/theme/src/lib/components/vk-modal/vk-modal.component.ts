import { Component, Input } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { VkButtonComponent } from '../vk-button/vk-button.component';

@Component({
  selector: 'vk-modal',
  standalone: true,
  imports: [FontAwesomeModule, VkButtonComponent],
  templateUrl: './vk-modal.component.html',
  styleUrl: './vk-modal.component.css',
})
export class VkModalComponent {
  constructor(icons: FaIconLibrary) {
    icons.addIconPacks(fas);
  }

  @Input() position: string = 'top';
  @Input() btnLabel: string = 'Open Model';
  @Input() btnColor: string = 'blue';

  modal: boolean = false;

  openModal() {
    this.modal = true;
  }

  closeModal() {
    this.modal = false;
  }
}
