import { Component, Input } from '@angular/core';

@Component({
  selector: 'vk-badge',
  standalone: true,
  imports: [],
  templateUrl: './vk-badge.component.html',
  styleUrl: './vk-badge.component.css',
})
export class VkBadgeComponent {
  @Input() color: string = 'blue';
}
