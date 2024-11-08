import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkCardComponent } from './vk-card.component';
import { VkCardTitleComponent } from '../vk-card-title/vk-card-title.component';
import { VkCardTextComponent } from '../vk-card-text/vk-card-text.component';

const meta: Meta = {
  title: 'Card',
  component: VkCardComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkCardComponent, VkCardTitleComponent, VkCardTextComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkCardComponent>;

export const Card: Story = {
  render: () => ({
    template: `<vk-card>
    <vk-card-title>Card</vk-card-title>
    <vk-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa cupiditate commodi minima molestias assumenda unde maiores perspiciatis consequuntur. Corporis cumque rerum doloribus illum?</vk-card-text>
    </vk-card>`,
  }),
};
