import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkH5Component } from './vk-h5.component';

const meta: Meta = {
  title: 'H5',
  component: VkH5Component,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkH5Component],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkH5Component>;

export const H5: Story = {
  render: () => ({
    template: `<vk-h5>Heading 5</vk-h5>`,
  }),
};
