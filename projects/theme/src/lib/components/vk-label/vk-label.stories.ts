import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkLabelComponent } from './vk-label.component';

const meta: Meta = {
  title: 'Form Label',
  component: VkLabelComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkLabelComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkLabelComponent>;

export const LabelDefault: Story = {
  render: () => ({
    template: `<vk-label for="email">Email</vk-label>`,
  }),
};

export const LabelBlue: Story = {
  render: () => ({
    template: `<vk-label for="email" color="blue">Email</vk-label>`,
  }),
};

export const LabelRed: Story = {
  render: () => ({
    template: `<vk-label for="email" color="red">Email</vk-label>`,
  }),
};

export const LabelYellow: Story = {
  render: () => ({
    template: `<vk-label for="email" color="yellow">Email</vk-label>`,
  }),
};

export const LabelGreen: Story = {
  render: () => ({
    template: `<vk-label for="email" color="green">Email</vk-label>`,
  }),
};
