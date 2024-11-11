import { Component, Input } from '@angular/core';

@Component({
  selector: 'vk-nav-logo-lg',
  standalone: true,
  imports: [],
  templateUrl: './vk-nav-logo-lg.component.html',
  styleUrl: './vk-nav-logo-lg.component.css',
})
export class VkNavLogoLgComponent {
  @Input() shape: string = 'default';
  @Input({ required: true }) src!: string;
  @Input({ required: true }) alt!: string;
}
