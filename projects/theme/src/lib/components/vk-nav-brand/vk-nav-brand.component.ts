import { Component, Input } from '@angular/core';

@Component({
  selector: 'vk-nav-brand',
  standalone: true,
  imports: [],
  templateUrl: './vk-nav-brand.component.html',
  styleUrl: './vk-nav-brand.component.css',
})
export class VkNavBrandComponent {
  @Input() color: string = 'default';
}
