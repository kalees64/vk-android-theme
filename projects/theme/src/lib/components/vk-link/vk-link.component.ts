import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'vk-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vk-link.component.html',
  styleUrl: './vk-link.component.css',
})
export class VkLinkComponent {
  @Input({ required: true }) href!: string;
  @Input() color: string = 'default';
}
