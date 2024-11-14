import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { VkTabsComponent } from '../vk-tabs/vk-tabs.component';

@Component({
  selector: 'vk-tabs-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vk-tabs-content.component.html',
  styleUrl: '../vk-tabs/vk-tabs.component.css',
})
export class VkTabsContentComponent {
  @Input() value!: string;

  constructor(public tabs: VkTabsComponent) {}
}
