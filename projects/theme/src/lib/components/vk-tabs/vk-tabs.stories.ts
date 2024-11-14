import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkTabsComponent } from './vk-tabs.component';
import { VkTabsContentComponent } from '../vk-tabs-content/vk-tabs-content.component';
import { VkTabsListComponent } from '../vk-tabs-list/vk-tabs-list.component';
import { VkTabsTriggerComponent } from '../vk-tabs-trigger/vk-tabs-trigger.component';
import { VkTabsTriggerUnderlineComponent } from '../vk-tabs-trigger-underline/vk-tabs-trigger-underline.component';

const meta: Meta = {
  title: 'Tabs',
  component: VkTabsComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        VkTabsComponent,
        VkTabsContentComponent,
        VkTabsListComponent,
        VkTabsTriggerComponent,
        VkTabsTriggerUnderlineComponent,
      ],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkTabsComponent>;

export const Tabs: Story = {
  render: () => ({
    template: `<vk-tabs defaultValue="account">
      <vk-tabs-list tabs-list>
        <vk-tabs-trigger value="account">Account</vk-tabs-trigger>
        <vk-tabs-trigger value="password">Password</vk-tabs-trigger>
      </vk-tabs-list>

      <vk-tabs-content value="account" tabs-content>
        <h1 class="vk-h1">Account Content</h1>
      </vk-tabs-content>

      <vk-tabs-content value="password" tabs-content>
        <h1 class="vk-h1">Password Content</h1>
      </vk-tabs-content>
    </vk-tabs>`,
  }),
};

export const TabsBlack: Story = {
  render: () => ({
    template: `<vk-tabs defaultValue="account">
      <vk-tabs-list tabs-list>
        <vk-tabs-trigger value="account" color="black">Account</vk-tabs-trigger>
        <vk-tabs-trigger value="password" color="black">Password</vk-tabs-trigger>
      </vk-tabs-list>

      <vk-tabs-content value="account" tabs-content>
        <h1 class="vk-h1">Account Content</h1>
      </vk-tabs-content>

      <vk-tabs-content value="password" tabs-content>
        <h1 class="vk-h1">Password Content</h1>
      </vk-tabs-content>
    </vk-tabs>`,
  }),
};

export const TabsBlue: Story = {
  render: () => ({
    template: `<vk-tabs defaultValue="account">
      <vk-tabs-list tabs-list>
        <vk-tabs-trigger value="account" color="blue">Account</vk-tabs-trigger>
        <vk-tabs-trigger value="password" color="blue">Password</vk-tabs-trigger>
      </vk-tabs-list>

      <vk-tabs-content value="account" tabs-content>
        <h1 class="vk-h1">Account Content</h1>
      </vk-tabs-content>

      <vk-tabs-content value="password" tabs-content>
        <h1 class="vk-h1">Password Content</h1>
      </vk-tabs-content>
    </vk-tabs>`,
  }),
};

export const TabsCyan: Story = {
  render: () => ({
    template: `<vk-tabs defaultValue="account">
      <vk-tabs-list tabs-list>
        <vk-tabs-trigger value="account" color="cyan">Account</vk-tabs-trigger>
        <vk-tabs-trigger value="password" color="cyan">Password</vk-tabs-trigger>
      </vk-tabs-list>

      <vk-tabs-content value="account" tabs-content>
        <h1 class="vk-h1">Account Content</h1>
      </vk-tabs-content>

      <vk-tabs-content value="password" tabs-content>
        <h1 class="vk-h1">Password Content</h1>
      </vk-tabs-content>
    </vk-tabs>`,
  }),
};

export const TabsSky: Story = {
  render: () => ({
    template: `<vk-tabs defaultValue="account">
      <vk-tabs-list tabs-list>
        <vk-tabs-trigger value="account" color="sky">Account</vk-tabs-trigger>
        <vk-tabs-trigger value="password" color="sky">Password</vk-tabs-trigger>
      </vk-tabs-list>

      <vk-tabs-content value="account" tabs-content>
        <h1 class="vk-h1">Account Content</h1>
      </vk-tabs-content>

      <vk-tabs-content value="password" tabs-content>
        <h1 class="vk-h1">Password Content</h1>
      </vk-tabs-content>
    </vk-tabs>`,
  }),
};

export const TabsRed: Story = {
  render: () => ({
    template: `<vk-tabs defaultValue="account">
      <vk-tabs-list tabs-list>
        <vk-tabs-trigger value="account" color="red">Account</vk-tabs-trigger>
        <vk-tabs-trigger value="password" color="red">Password</vk-tabs-trigger>
      </vk-tabs-list>

      <vk-tabs-content value="account" tabs-content>
        <h1 class="vk-h1">Account Content</h1>
      </vk-tabs-content>

      <vk-tabs-content value="password" tabs-content>
        <h1 class="vk-h1">Password Content</h1>
      </vk-tabs-content>
    </vk-tabs>`,
  }),
};

export const TabsRose: Story = {
  render: () => ({
    template: `<vk-tabs defaultValue="account">
      <vk-tabs-list tabs-list>
        <vk-tabs-trigger value="account" color="rose">Account</vk-tabs-trigger>
        <vk-tabs-trigger value="password" color="rose">Password</vk-tabs-trigger>
      </vk-tabs-list>

      <vk-tabs-content value="account" tabs-content>
        <h1 class="vk-h1">Account Content</h1>
      </vk-tabs-content>

      <vk-tabs-content value="password" tabs-content>
        <h1 class="vk-h1">Password Content</h1>
      </vk-tabs-content>
    </vk-tabs>`,
  }),
};

export const TabsPink: Story = {
  render: () => ({
    template: `<vk-tabs defaultValue="account">
      <vk-tabs-list tabs-list>
        <vk-tabs-trigger value="account" color="pink">Account</vk-tabs-trigger>
        <vk-tabs-trigger value="password" color="pink">Password</vk-tabs-trigger>
      </vk-tabs-list>

      <vk-tabs-content value="account" tabs-content>
        <h1 class="vk-h1">Account Content</h1>
      </vk-tabs-content>

      <vk-tabs-content value="password" tabs-content>
        <h1 class="vk-h1">Password Content</h1>
      </vk-tabs-content>
    </vk-tabs>`,
  }),
};

export const TabsGreen: Story = {
  render: () => ({
    template: `<vk-tabs defaultValue="account">
      <vk-tabs-list tabs-list>
        <vk-tabs-trigger value="account" color="green">Account</vk-tabs-trigger>
        <vk-tabs-trigger value="password" color="green">Password</vk-tabs-trigger>
      </vk-tabs-list>

      <vk-tabs-content value="account" tabs-content>
        <h1 class="vk-h1">Account Content</h1>
      </vk-tabs-content>

      <vk-tabs-content value="password" tabs-content>
        <h1 class="vk-h1">Password Content</h1>
      </vk-tabs-content>
    </vk-tabs>`,
  }),
};

export const TabsLime: Story = {
  render: () => ({
    template: `<vk-tabs defaultValue="account">
      <vk-tabs-list tabs-list>
        <vk-tabs-trigger value="account" color="lime">Account</vk-tabs-trigger>
        <vk-tabs-trigger value="password" color="lime">Password</vk-tabs-trigger>
      </vk-tabs-list>

      <vk-tabs-content value="account" tabs-content>
        <h1 class="vk-h1">Account Content</h1>
      </vk-tabs-content>

      <vk-tabs-content value="password" tabs-content>
        <h1 class="vk-h1">Password Content</h1>
      </vk-tabs-content>
    </vk-tabs>`,
  }),
};

export const TabsTeal: Story = {
  render: () => ({
    template: `<vk-tabs defaultValue="account">
      <vk-tabs-list tabs-list>
        <vk-tabs-trigger value="account" color="teal">Account</vk-tabs-trigger>
        <vk-tabs-trigger value="password" color="teal">Password</vk-tabs-trigger>
      </vk-tabs-list>

      <vk-tabs-content value="account" tabs-content>
        <h1 class="vk-h1">Account Content</h1>
      </vk-tabs-content>

      <vk-tabs-content value="password" tabs-content>
        <h1 class="vk-h1">Password Content</h1>
      </vk-tabs-content>
    </vk-tabs>`,
  }),
};

export const TabsYellow: Story = {
  render: () => ({
    template: `<vk-tabs defaultValue="account">
      <vk-tabs-list tabs-list>
        <vk-tabs-trigger value="account" color="yellow">Account</vk-tabs-trigger>
        <vk-tabs-trigger value="password" color="yellow">Password</vk-tabs-trigger>
      </vk-tabs-list>

      <vk-tabs-content value="account" tabs-content>
        <h1 class="vk-h1">Account Content</h1>
      </vk-tabs-content>

      <vk-tabs-content value="password" tabs-content>
        <h1 class="vk-h1">Password Content</h1>
      </vk-tabs-content>
    </vk-tabs>`,
  }),
};

export const TabsOrange: Story = {
  render: () => ({
    template: `<vk-tabs defaultValue="account">
      <vk-tabs-list tabs-list>
        <vk-tabs-trigger value="account" color="orange">Account</vk-tabs-trigger>
        <vk-tabs-trigger value="password" color="orange">Password</vk-tabs-trigger>
      </vk-tabs-list>

      <vk-tabs-content value="account" tabs-content>
        <h1 class="vk-h1">Account Content</h1>
      </vk-tabs-content>

      <vk-tabs-content value="password" tabs-content>
        <h1 class="vk-h1">Password Content</h1>
      </vk-tabs-content>
    </vk-tabs>`,
  }),
};

export const TabsPurple: Story = {
  render: () => ({
    template: `<vk-tabs defaultValue="account">
      <vk-tabs-list tabs-list>
        <vk-tabs-trigger value="account" color="purple">Account</vk-tabs-trigger>
        <vk-tabs-trigger value="password" color="purple">Password</vk-tabs-trigger>
      </vk-tabs-list>

      <vk-tabs-content value="account" tabs-content>
        <h1 class="vk-h1">Account Content</h1>
      </vk-tabs-content>

      <vk-tabs-content value="password" tabs-content>
        <h1 class="vk-h1">Password Content</h1>
      </vk-tabs-content>
    </vk-tabs>`,
  }),
};

export const TabsViolet: Story = {
  render: () => ({
    template: `<vk-tabs defaultValue="account">
      <vk-tabs-list tabs-list>
        <vk-tabs-trigger value="account" color="violet">Account</vk-tabs-trigger>
        <vk-tabs-trigger value="password" color="violet">Password</vk-tabs-trigger>
      </vk-tabs-list>

      <vk-tabs-content value="account" tabs-content>
        <h1 class="vk-h1">Account Content</h1>
      </vk-tabs-content>

      <vk-tabs-content value="password" tabs-content>
        <h1 class="vk-h1">Password Content</h1>
      </vk-tabs-content>
    </vk-tabs>`,
  }),
};
