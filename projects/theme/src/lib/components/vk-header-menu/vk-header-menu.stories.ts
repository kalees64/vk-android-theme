import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { VkHeaderMenuComponent } from './vk-header-menu.component';
import { VkHeaderMenuLinkComponent } from '../vk-header-menu-link/vk-header-menu-link.component';

const meta: Meta = {
  title: 'Header Menu Links',
  component: VkHeaderMenuComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([{ path: '**', component: VkHeaderMenuLinkComponent }]),
      ],
    }),
    moduleMetadata({
      imports: [VkHeaderMenuComponent, VkHeaderMenuLinkComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkHeaderMenuComponent>;

export const HeaderLinksMenuDefault: Story = {
  render: () => ({
    template: `<vk-header-menu>
<vk-header-menu-link href="#">Home</vk-header-menu-link>
<vk-header-menu-link href="#">About</vk-header-menu-link>
<vk-header-menu-link href="#">Contact</vk-header-menu-link>
    </vk-header-menu>`,
  }),
};
