import { Component, Input } from '@angular/core';

@Component({
  selector: 'vk-alert',
  standalone: true,
  imports: [],
  templateUrl: './vk-alert.component.html',
  styleUrl: './vk-alert.component.css',
})
export class VkAlertComponent {
  @Input() color: string = 'red';
}
