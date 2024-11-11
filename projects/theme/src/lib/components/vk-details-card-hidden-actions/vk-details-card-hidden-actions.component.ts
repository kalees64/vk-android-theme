import { Component } from '@angular/core';

@Component({
  selector: 'vk-details-card-hidden-actions',
  standalone: true,
  imports: [],
  templateUrl: './vk-details-card-hidden-actions.component.html',
  styleUrl: './vk-details-card-hidden-actions.component.css',
})
export class VkDetailsCardHiddenActionsComponent {
  menu: boolean = false;

  btnState: boolean = true;

  openMenu() {
    this.menu = true;
  }

  closeMenu() {
    this.menu = false;
  }

  btnClick() {
    if (this.btnState) {
      this.openMenu();
      this.btnState = false;
    } else {
      this.closeMenu();
      this.btnState = true;
    }
  }
}
