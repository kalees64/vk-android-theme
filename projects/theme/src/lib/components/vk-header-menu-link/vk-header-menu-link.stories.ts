import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { VkHeaderMenuLinkComponent } from './vk-header-menu-link.component';
import { provideRouter } from '@angular/router';

const meta: Meta = {
  title: 'Header Menu Link',
  component: VkHeaderMenuLinkComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([{ path: '**', component: VkHeaderMenuLinkComponent }]),
      ],
    }),
    moduleMetadata({
      imports: [VkHeaderMenuLinkComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkHeaderMenuLinkComponent>;

export const HeaderMenuLink: Story = {
  render: () => ({
    template: `<vk-header-menu-link href="#">Home</vk-header-menu-link>`,
  }),
};

export const HeaderMenuLinkBlue: Story = {
  render: () => ({
    template: `<vk-header-menu-link href="#" color="blue">Home</vk-header-menu-link>`,
  }),
};
