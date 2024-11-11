import { Component, Input } from '@angular/core';

@Component({
  selector: 'vk-nav-logo-xl',
  standalone: true,
  imports: [],
  templateUrl: './vk-nav-logo-xl.component.html',
  styleUrl: './vk-nav-logo-xl.component.css',
})
export class VkNavLogoXlComponent {
  @Input() shape: string = 'default';
  @Input({ required: true }) src!: string;
  @Input({ required: true }) alt!: string;
}
