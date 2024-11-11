import { Component, Input } from '@angular/core';

@Component({
  selector: 'vk-nav-logo-md',
  standalone: true,
  imports: [],
  templateUrl: './vk-nav-logo-md.component.html',
  styleUrl: './vk-nav-logo-md.component.css',
})
export class VkNavLogoMdComponent {
  @Input() shape: string = 'default';
  @Input({ required: true }) src!: string;
  @Input({ required: true }) alt!: string;
}
