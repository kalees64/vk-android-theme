import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core';
import { VkTabsContentComponent } from '../vk-tabs-content/vk-tabs-content.component';

@Component({
  selector: 'vk-tabs',
  standalone: true,
  imports: [],
  templateUrl: './vk-tabs.component.html',
  styleUrl: './vk-tabs.component.css',
})
export class VkTabsComponent implements AfterContentInit {
  @Input() defaultValue: string = '';
  @ContentChildren(VkTabsContentComponent)
  tabContents!: QueryList<VkTabsContentComponent>;

  activeTab: string;

  constructor() {
    this.activeTab = this.defaultValue;
  }

  ngAfterContentInit() {
    if (!this.activeTab && this.tabContents.first) {
      this.activeTab = this.tabContents.first.value;
    }
  }

  selectTab(value: string) {
    this.activeTab = value;
  }
}
