import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { VkLinkComponent } from 'theme';
import { provideRouter } from '@angular/router';
import { VkHeaderLinksRightComponent } from './vk-header-links-right.component';

const meta: Meta = {
  title: 'Header Links Right',
  component: VkHeaderLinksRightComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [provideRouter([{ path: '**', component: VkLinkComponent }])],
    }),
    moduleMetadata({
      imports: [VkHeaderLinksRightComponent, VkLinkComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkHeaderLinksRightComponent>;

export const HeaderLinksRightDefault: Story = {
  render: () => ({
    template: `<vk-header-links-right>
    <vk-link href="#" color="blue-d">Home</vk-link>
    <vk-link href="#" color="blue-d">Profile</vk-link>
    <vk-link href="#" color="blue-d">About</vk-link>
    </vk-header-links-right>`,
  }),
};
