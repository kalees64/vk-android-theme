import { Component } from '@angular/core';
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
}
