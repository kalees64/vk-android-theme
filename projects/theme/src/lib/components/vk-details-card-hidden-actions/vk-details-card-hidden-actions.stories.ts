import { VkDetailsCardHiddenActionComponent } from './../vk-details-card-hidden-action/vk-details-card-hidden-action.component';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkDetailsCardHiddenActionsComponent } from './vk-details-card-hidden-actions.component';

const meta: Meta = {
  title: 'Hidden Actions Button',
  component: VkDetailsCardHiddenActionsComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        VkDetailsCardHiddenActionsComponent,
        VkDetailsCardHiddenActionComponent,
      ],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkDetailsCardHiddenActionsComponent>;

export const HiddenActionButton: Story = {
  render: () => ({
    template: `<vk-details-card-hidden-actions>
    <vk-details-card-hidden-action>Edit</vk-details-card-hidden-action>
    <vk-details-card-hidden-action>Delete</vk-details-card-hidden-action>
    </vk-details-card-hidden-actions>`,
  }),
};
