import { Component, Input } from '@angular/core';
import { VkTabsComponent } from '../vk-tabs/vk-tabs.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vk-tabs-trigger-underline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vk-tabs-trigger-underline.component.html',
  styleUrl: './vk-tabs-trigger-underline.component.css',
})
export class VkTabsTriggerUnderlineComponent {
  @Input() value!: string;

  constructor(public tabs: VkTabsComponent) {}

  @Input() color: string = 'default';

  selectTab() {
    this.tabs.selectTab(this.value);
  }
}
