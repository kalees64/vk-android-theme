import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkDetailsCardHiddenActionComponent } from './vk-details-card-hidden-action.component';

const meta: Meta = {
  title: 'Hidden Actions Menu Item',
  component: VkDetailsCardHiddenActionComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkDetailsCardHiddenActionComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkDetailsCardHiddenActionComponent>;

export const HiddenActionMenuItem: Story = {
  render: () => ({
    template: `<vk-details-card-hidden-action>Edit</vk-details-card-hidden-action>`,
  }),
};
