import { Component, Input } from '@angular/core';

@Component({
  selector: 'vk-input',
  standalone: true,
  imports: [],
  templateUrl: './vk-input.component.html',
  styleUrl: './vk-input.component.css',
})
export class VkInputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = 'Enter text';
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() valid!: boolean;
  @Input() invalid!: boolean;

  @Input() maxlength!: number;
  @Input() minlength!: number;
  @Input() min!: any;
  @Input() max!: any;
  @Input() list!: any;
  @Input() value: any | null = null;
  @Input() pattern!: any;
  @Input() autofocus!: boolean;
  @Input() multible!: boolean;
}
