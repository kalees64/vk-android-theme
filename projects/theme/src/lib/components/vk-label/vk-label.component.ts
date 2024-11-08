import { Component, Input } from '@angular/core';

@Component({
  selector: 'vk-label',
  standalone: true,
  imports: [],
  templateUrl: './vk-label.component.html',
  styleUrl: './vk-label.component.css',
})
export class VkLabelComponent {
  @Input() for: string = 'input';
  @Input() color: string = 'default';
}
