import { Component, Input } from '@angular/core';

@Component({
  selector: 'vk-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './vk-sidebar.component.html',
  styleUrl: './vk-sidebar.component.css',
})
export class VkSidebarComponent {
  @Input() size: string = 'default';
  @Input() color: string = 'default';

  menu: boolean = true;

  closeMenu() {
    this.menu = false;
  }
}
