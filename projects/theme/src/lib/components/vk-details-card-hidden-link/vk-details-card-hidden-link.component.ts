import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'vk-details-card-hidden-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vk-details-card-hidden-link.component.html',
  styleUrl: './vk-details-card-hidden-link.component.css',
})
export class VkDetailsCardHiddenLinkComponent {
  @Input({ required: true }) href: string = '#';
}
