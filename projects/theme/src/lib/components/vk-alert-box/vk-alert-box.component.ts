import { Component, Input } from '@angular/core';

@Component({
  selector: 'vk-alert-box',
  standalone: true,
  imports: [],
  templateUrl: './vk-alert-box.component.html',
  styleUrl: './vk-alert-box.component.css',
})
export class VkAlertBoxComponent {
  @Input() color: string = 'red';
}
