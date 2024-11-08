import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { VkLinkComponent } from './vk-link.component';
import { provideRouter } from '@angular/router';

const meta: Meta = {
  title: 'Link',
  component: VkLinkComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [provideRouter([{ path: '**', component: VkLinkComponent }])],
    }),
    moduleMetadata({
      imports: [VkLinkComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkLinkComponent>;

export const LinkDefault: Story = {
  render: () => ({
    template: `<vk-link href="#">Click here</vk-link>`,
  }),
};

export const LinkWhiteToDark: Story = {
  render: () => ({
    template: `<vk-link href="#" color="dark">Click here</vk-link>`,
  }),
};

export const LinkWhiteToBlue: Story = {
  render: () => ({
    template: `<vk-link href="#" color="blue">Click here</vk-link>`,
  }),
};

export const LinkLight: Story = {
  render: () => ({
    template: `<vk-link href="#" color="light">Click here</vk-link>`,
  }),
};

export const LinkDarkToBlue: Story = {
  render: () => ({
    template: `<vk-link href="#" color="blue-d">Click here</vk-link>`,
  }),
};

export const LinkBlueToDark: Story = {
  render: () => ({
    template: `<vk-link href="#" color="blue-cd">Click here</vk-link>`,
  }),
};

export const LinkBlueToWhite: Story = {
  render: () => ({
    template: `<vk-link href="#" color="blue-cw">Click here</vk-link>`,
  }),
};
