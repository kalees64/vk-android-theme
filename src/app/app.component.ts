import { Component, ViewChild } from '@angular/core';
import { VkDetailsCardComponent } from '../../projects/theme/src/lib/components/vk-details-card/vk-details-card.component';
import { VkDetailsCardTitleComponent } from '../../projects/theme/src/lib/components/vk-details-card-title/vk-details-card-title.component';
import { VkDetailsCardActionsComponent } from '../../projects/theme/src/lib/components/vk-details-card-actions/vk-details-card-actions.component';
import { VkDetailsCardActionComponent } from '../../projects/theme/src/lib/components/vk-details-card-action/vk-details-card-action.component';
import { VkDetailsCardHiddenActionsComponent } from '../../projects/theme/src/lib/components/vk-details-card-hidden-actions/vk-details-card-hidden-actions.component';
import { VkDetailsCardHiddenActionComponent } from '../../projects/theme/src/lib/components/vk-details-card-hidden-action/vk-details-card-hidden-action.component';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { VkSidebarComponent } from '../../projects/theme/src/lib/components/vk-sidebar/vk-sidebar.component';
import { VkSidebarLinkComponent } from '../../projects/theme/src/lib/components/vk-sidebar-link/vk-sidebar-link.component';
import { VkModalComponent } from '../../projects/theme/src/lib/components/vk-modal/vk-modal.component';
import { VkModalTitleComponent } from '../../projects/theme/src/lib/components/vk-modal-title/vk-modal-title.component';
import { VkModalBodyComponent } from '../../projects/theme/src/lib/components/vk-modal-body/vk-modal-body.component';
import { VkModalButtonsComponent } from '../../projects/theme/src/lib/components/vk-modal-buttons/vk-modal-buttons.component';
import { VkButtonComponent } from '../../projects/theme/src/lib/components/vk-button/vk-button.component';
import { VkTabsComponent } from '../../projects/theme/src/lib/components/vk-tabs/vk-tabs.component';
import { VkTabsListComponent } from '../../projects/theme/src/lib/components/vk-tabs-list/vk-tabs-list.component';
import { VkTabsTriggerComponent } from '../../projects/theme/src/lib/components/vk-tabs-trigger/vk-tabs-trigger.component';
import { VkTabsContentComponent } from '../../projects/theme/src/lib/components/vk-tabs-content/vk-tabs-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    VkDetailsCardComponent,
    VkDetailsCardTitleComponent,
    VkDetailsCardActionsComponent,
    VkDetailsCardActionComponent,
    VkDetailsCardHiddenActionsComponent,
    VkDetailsCardHiddenActionComponent,
    FontAwesomeModule,
    VkSidebarComponent,
    VkSidebarLinkComponent,
    VkModalComponent,
    VkModalTitleComponent,
    VkModalBodyComponent,
    VkModalButtonsComponent,
    VkButtonComponent,
    VkTabsComponent,
    VkTabsListComponent,
    VkTabsTriggerComponent,
    VkTabsContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(icons: FaIconLibrary) {
    icons.addIcons(faCoffee);
  }

  title = 'vk-angular-theme';

  handleClick() {
    alert('I am Clicked');
  }

  @ViewChild('vkmodal') modal!: VkModalComponent;

  showModal() {
    this.modal.openModal();
  }

  hideModal() {
    this.modal.closeModal();
  }
}
