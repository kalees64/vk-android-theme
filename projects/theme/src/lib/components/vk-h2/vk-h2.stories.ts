import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkH2Component } from './vk-h2.component';

const meta: Meta = {
  title: 'H2',
  component: VkH2Component,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkH2Component],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkH2Component>;

export const H2: Story = {
  render: () => ({
    template: `<vk-h2>Heading 2</vk-h2>`,
  }),
};
