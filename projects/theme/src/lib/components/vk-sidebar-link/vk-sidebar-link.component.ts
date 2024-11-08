import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'vk-sidebar-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vk-sidebar-link.component.html',
  styleUrl: './vk-sidebar-link.component.css',
})
export class VkSidebarLinkComponent {
  @Input({ required: true }) href!: string;
  @Input() color: string = 'default';
}
