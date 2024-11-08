import { Component, Input } from '@angular/core';

@Component({
  selector: 'vk-button',
  standalone: true,
  imports: [],
  templateUrl: './vk-button.component.html',
  styleUrl: './vk-button.component.css',
})
export class VkButtonComponent {
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Input() color: string = 'default';
}
