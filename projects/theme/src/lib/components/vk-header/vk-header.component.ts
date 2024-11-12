import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'vk-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vk-header.component.html',
  styleUrl: './vk-header.component.css',
})
export class VkHeaderComponent {
  @Input() color: string = 'default';
  @Input() logoutFn: () => void = () => {
    alert('LoggedOut');
  };

  menu: boolean = false;

  menuBtn: boolean = true;

  openMenu() {
    this.menu = true;
  }

  closeMenu() {
    this.menu = false;
  }

  menuBtnClick() {
    if (this.menuBtn) {
      this.openMenu();
      this.menuBtn = false;
    } else {
      this.closeMenu();
      this.menuBtn = true;
    }
  }
}
