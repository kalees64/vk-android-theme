import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkDetailsCardTitleComponent } from './vk-details-card-title.component';

const meta: Meta = {
  title: 'Card with Actions Title',
  component: VkDetailsCardTitleComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkDetailsCardTitleComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkDetailsCardTitleComponent>;

export const CardWithActionsTitle: Story = {
  render: () => ({
    template: `<vk-details-card-title>Books List</vk-details-card-title>`,
  }),
};
