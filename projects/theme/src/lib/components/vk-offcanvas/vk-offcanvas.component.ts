import { Component, Input } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { VkButtonComponent } from '../vk-button/vk-button.component';

@Component({
  selector: 'vk-offcanvas',
  standalone: true,
  imports: [FontAwesomeModule, VkButtonComponent],
  templateUrl: './vk-offcanvas.component.html',
  styleUrl: './vk-offcanvas.component.css',
})
export class VkOffcanvasComponent {
  constructor(icons: FaIconLibrary) {
    icons.addIconPacks(fas);
  }

  @Input() btnLabel: string = 'Open Canvas';
  @Input() btnColor: string = 'blue';
  @Input() position: string = 'left';

  canvas: boolean = false;

  openCanvas() {
    this.canvas = true;
  }

  closeCanvas() {
    this.canvas = false;
  }
}
