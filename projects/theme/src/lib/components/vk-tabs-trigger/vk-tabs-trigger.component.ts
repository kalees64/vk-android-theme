import { Component, Input } from '@angular/core';
import { VkTabsComponent } from '../vk-tabs/vk-tabs.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vk-tabs-trigger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vk-tabs-trigger.component.html',
  styleUrl: '../vk-tabs/vk-tabs.component.css',
})
export class VkTabsTriggerComponent {
  @Input() value!: string;

  constructor(public tabs: VkTabsComponent) {}

  @Input() color: string = 'default';

  selectTab() {
    this.tabs.selectTab(this.value);
  }
}
