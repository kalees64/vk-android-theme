import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { VkSidebarComponent } from './vk-sidebar.component';
import { VkSidebarLinkComponent } from 'theme';
import { provideRouter } from '@angular/router';

const meta: Meta = {
  title: 'Sidebar',
  component: VkSidebarComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([{ path: '**', component: VkSidebarLinkComponent }]),
      ],
    }),
    moduleMetadata({
      imports: [VkSidebarComponent, VkSidebarLinkComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkSidebarComponent>;

export const SidebarDefault: Story = {
  render: () => ({
    template: `<vk-sidebar>
      <span brand>Brand Name</span>
    <div links>
      <vk-sidebar-link href="#">Home</vk-sidebar-link>
      <vk-sidebar-link href="#">About</vk-sidebar-link>
      <vk-sidebar-link href="#">Profile</vk-sidebar-link>
    </div>
    </vk-sidebar>`,
  }),
};

export const SidebarBlue: Story = {
  render: () => ({
    template: `<vk-sidebar color="blue">
      <span brand>Brand Name</span>
    <div links>
      <vk-sidebar-link href="#" color="blue">Home</vk-sidebar-link>
      <vk-sidebar-link href="#" color="blue">About</vk-sidebar-link>
      <vk-sidebar-link href="#" color="blue">Profile</vk-sidebar-link>
    </div>
    </vk-sidebar>`,
  }),
};

export const SidebarDark: Story = {
  render: () => ({
    template: `<vk-sidebar color="dark">
      <span brand>Brand Name</span>
    <div links>
      <vk-sidebar-link href="#" color="dark">Home</vk-sidebar-link>
      <vk-sidebar-link href="#" color="dark">About</vk-sidebar-link>
      <vk-sidebar-link href="#" color="dark">Profile</vk-sidebar-link>
    </div>
    </vk-sidebar>`,
  }),
};

export const SidebarRed: Story = {
  render: () => ({
    template: `<vk-sidebar color="red">
      <span brand>Brand Name</span>
    <div links>
      <vk-sidebar-link href="#" color="red">Home</vk-sidebar-link>
      <vk-sidebar-link href="#" color="red">About</vk-sidebar-link>
      <vk-sidebar-link href="#" color="red">Profile</vk-sidebar-link>
    </div>
    </vk-sidebar>`,
  }),
};

export const SidebarGreen: Story = {
  render: () => ({
    template: `<vk-sidebar color="green">
      <span brand>Brand Name</span>
    <div links>
      <vk-sidebar-link href="#" color="green">Home</vk-sidebar-link>
      <vk-sidebar-link href="#" color="green">About</vk-sidebar-link>
      <vk-sidebar-link href="#" color="green">Profile</vk-sidebar-link>
    </div>
    </vk-sidebar>`,
  }),
};
