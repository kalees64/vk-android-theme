import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkH1Component } from './vk-h1.component';

const meta: Meta = {
  title: 'H1',
  component: VkH1Component,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkH1Component],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkH1Component>;

export const H1: Story = {
  render: () => ({
    template: `<vk-h1>Heading 1</vk-h1>`,
  }),
};
