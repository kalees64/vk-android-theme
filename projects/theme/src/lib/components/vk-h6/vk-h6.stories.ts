import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkH6Component } from './vk-h6.component';

const meta: Meta = {
  title: 'H6',
  component: VkH6Component,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkH6Component],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkH6Component>;

export const H6: Story = {
  render: () => ({
    template: `<vk-h6>Heading 6</vk-h6>`,
  }),
};
