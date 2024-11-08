import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkBadgeComponent } from './vk-badge.component';

const meta: Meta = {
  title: 'Badge',
  component: VkBadgeComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkBadgeComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkBadgeComponent>;

export const BadgeDefault: Story = {
  render: (args) => ({
    props: args,
    template: `<vk-badge >Badge</vk-badge>`,
  }),
};

export const BadgeBlue: Story = {
  render: (args) => ({
    props: args,
    template: `<vk-badge color="blue">Badge</vk-badge>`,
  }),
};

export const BadgeRed: Story = {
  render: (args) => ({
    props: args,
    template: `<vk-badge color="red">Badge</vk-badge>`,
  }),
};

export const BadgeGreen: Story = {
  render: (args) => ({
    props: args,
    template: `<vk-badge color="green">Badge</vk-badge>`,
  }),
};

export const BadgeYellow: Story = {
  render: (args) => ({
    props: args,
    template: `<vk-badge color="yellow">Badge</vk-badge>`,
  }),
};
