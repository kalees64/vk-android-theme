import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'vk-breadcrumb-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vk-breadcrumb-item.component.html',
  styleUrl: './vk-breadcrumb-item.component.css',
})
export class VkBreadcrumbItemComponent {
  @Input() href!: string;
}
