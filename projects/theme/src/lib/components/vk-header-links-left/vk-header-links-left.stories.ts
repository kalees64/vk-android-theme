import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { VkHeaderLinksLeftComponent } from './vk-header-links-left.component';
import { VkLinkComponent } from 'theme';
import { provideRouter } from '@angular/router';

const meta: Meta = {
  title: 'Header Links Left',
  component: VkHeaderLinksLeftComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [provideRouter([{ path: '**', component: VkLinkComponent }])],
    }),
    moduleMetadata({
      imports: [VkHeaderLinksLeftComponent, VkLinkComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkHeaderLinksLeftComponent>;

export const HeaderLinksLeftDefault: Story = {
  render: () => ({
    template: `<vk-header-links-left>
    <vk-link href="#" color="blue-d">Home</vk-link>
    <vk-link href="#" color="blue-d">Profile</vk-link>
    <vk-link href="#" color="blue-d">About</vk-link>
    </vk-header-links-left>`,
  }),
};
