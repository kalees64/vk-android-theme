import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkH4Component } from './vk-h4.component';

const meta: Meta = {
  title: 'H4',
  component: VkH4Component,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkH4Component],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkH4Component>;

export const H4: Story = {
  render: () => ({
    template: `<vk-h4>Heading 4</vk-h4>`,
  }),
};
