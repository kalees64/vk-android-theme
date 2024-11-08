import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkCardTextComponent } from './vk-card-text.component';

const meta: Meta = {
  title: 'Card Text',
  component: VkCardTextComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkCardTextComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkCardTextComponent>;

export const CardText: Story = {
  render: () => ({
    template: `<vk-card-text>Card Text</vk-card-text>`,
  }),
};
