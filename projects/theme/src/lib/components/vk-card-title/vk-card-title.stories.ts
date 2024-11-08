import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkCardTitleComponent } from './vk-card-title.component';

const meta: Meta = {
  title: 'Card Title',
  component: VkCardTitleComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkCardTitleComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkCardTitleComponent>;

export const CardTitle: Story = {
  render: () => ({
    template: `<vk-card-title>Card Title</vk-card-title>`,
  }),
};
