import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkH3Component } from './vk-h3.component';

const meta: Meta = {
  title: 'H3',
  component: VkH3Component,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkH3Component],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkH3Component>;

export const H3: Story = {
  render: () => ({
    template: `<vk-h3>Heading 3</vk-h3>`,
  }),
};
