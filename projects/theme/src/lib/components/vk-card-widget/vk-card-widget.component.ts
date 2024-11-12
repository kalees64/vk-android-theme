import { Component, Input } from '@angular/core';

@Component({
  selector: 'vk-card-widget',
  standalone: true,
  imports: [],
  templateUrl: './vk-card-widget.component.html',
  styleUrl: './vk-card-widget.component.css',
})
export class VkCardWidgetComponent {
  @Input({ required: true }) label!: string;
  @Input() color: string = 'default';
}
