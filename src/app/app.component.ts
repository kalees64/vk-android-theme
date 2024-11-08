import { Component } from '@angular/core';
import { VkButtonComponent } from '../../projects/theme/src/lib/components/vk-button/vk-button.component';
import { VkBadgeComponent } from '../../projects/theme/src/lib/components/vk-badge/vk-badge.component';
import { VkButtonGradientComponent } from '../../projects/theme/src/lib/components/vk-button-gradient/vk-button-gradient.component';
import { VkAlertComponent } from '../../projects/theme/src/lib/components/vk-alert/vk-alert.component';
import { VkAlertBoxComponent } from '../../projects/theme/src/lib/components/vk-alert-box/vk-alert-box.component';
import { VkH1Component } from '../../projects/theme/src/lib/components/vk-h1/vk-h1.component';
import { VkCardTitleComponent } from '../../projects/theme/src/lib/components/vk-card-title/vk-card-title.component';
import { VkCardComponent } from '../../projects/theme/src/lib/components/vk-card/vk-card.component';
import { VkCardTextComponent } from '../../projects/theme/src/lib/components/vk-card-text/vk-card-text.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    VkButtonComponent,
    VkBadgeComponent,
    VkButtonGradientComponent,
    VkAlertComponent,
    VkAlertBoxComponent,
    VkH1Component,
    VkCardTitleComponent,
    VkCardComponent,
    VkCardTextComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'vk-angular-theme';

  handleClick() {
    alert('I am Clicked');
  }
}
