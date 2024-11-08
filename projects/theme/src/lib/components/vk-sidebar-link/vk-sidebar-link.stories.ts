import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { VkSidebarLinkComponent } from './vk-sidebar-link.component';

const meta: Meta = {
  title: 'Sidebar Link',
  component: VkSidebarLinkComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([{ path: '**', component: VkSidebarLinkComponent }]),
      ],
    }),
    moduleMetadata({
      imports: [VkSidebarLinkComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkSidebarLinkComponent>;

export const SidebarLinkDefault: Story = {
  render: () => ({
    template: `<vk-sidebar-link href="#">Home</vk-sidebar-link>`,
  }),
};

export const SidebarLinkDark: Story = {
  render: () => ({
    template: `<vk-sidebar-link href="#" color="dark">Home</vk-sidebar-link>`,
  }),
};

export const SidebarLinkBlue: Story = {
  render: () => ({
    template: `<vk-sidebar-link href="#" color="blue">Home</vk-sidebar-link>`,
  }),
};

export const SidebarLinkRed: Story = {
  render: () => ({
    template: `<vk-sidebar-link href="#" color="red">Home</vk-sidebar-link>`,
  }),
};

export const SidebarLinkGreen: Story = {
  render: () => ({
    template: `<vk-sidebar-link href="#" color="green">Home</vk-sidebar-link>`,
  }),
};

export const SidebarLinkWithImage: Story = {
  render: () => ({
    template: `<vk-sidebar-link href="#">
    <img src="https://static.thenounproject.com/png/3574480-200.png" alt="icon" width="25" height="25" />Home
    </vk-sidebar-link>`,
  }),
};
