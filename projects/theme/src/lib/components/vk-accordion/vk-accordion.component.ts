import { Component, Input } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas, faTriangleCircleSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'vk-accordion',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './vk-accordion.component.html',
  styleUrl: './vk-accordion.component.css',
})
export class VkAccordionComponent {
  @Input() title: string = 'Accordion';
  @Input() color: string = 'default';

  constructor(icons: FaIconLibrary) {
    icons.addIconPacks(fas);
  }

  icon: boolean = false;

  rotateIcon() {
    this.icon = !this.icon;
  }
}
