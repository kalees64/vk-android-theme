import { Component, Input } from '@angular/core';

@Component({
  selector: 'vk-details-card',
  standalone: true,
  imports: [],
  templateUrl: './vk-details-card.component.html',
  styleUrl: './vk-details-card.component.css',
})
export class VkDetailsCardComponent {
  @Input() name: string = 'Books List';

  @Input() color: string = 'default';

  alertPop() {
    alert('Add Action');
  }
}
