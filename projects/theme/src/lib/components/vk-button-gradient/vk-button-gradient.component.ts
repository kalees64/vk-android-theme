import { Component, Input } from '@angular/core';

@Component({
  selector: 'vk-button-gradient',
  standalone: true,
  imports: [],
  templateUrl: './vk-button-gradient.component.html',
  styleUrl: './vk-button-gradient.component.css',
})
export class VkButtonGradientComponent {
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Input() color: string = 'teal';
  @Input() gradient: boolean = false;
}
