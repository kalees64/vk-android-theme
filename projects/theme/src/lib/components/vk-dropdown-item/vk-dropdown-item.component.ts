import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'vk-dropdown-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vk-dropdown-item.component.html',
  styleUrl: './vk-dropdown-item.component.css',
})
export class VkDropdownItemComponent {
  @Input({ required: true }) href: string = '#';
}
