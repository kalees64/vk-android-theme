import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'vk-header-menu-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vk-header-menu-link.component.html',
  styleUrl: './vk-header-menu-link.component.css',
})
export class VkHeaderMenuLinkComponent {
  @Input({ required: true }) href!: string;
  @Input() color: string = 'default';
}
