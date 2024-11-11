import { Component, Input } from '@angular/core';

@Component({
  selector: 'vk-nav-logo',
  standalone: true,
  imports: [],
  templateUrl: './vk-nav-logo.component.html',
  styleUrl: './vk-nav-logo.component.css',
})
export class VkNavLogoComponent {
  @Input() shape: string = 'default';
  @Input({ required: true }) src!: string;
  @Input({ required: true }) alt!: string;
}
