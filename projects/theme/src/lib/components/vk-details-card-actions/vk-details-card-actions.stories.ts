import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkDetailsCardActionsComponent } from './vk-details-card-actions.component';
import { VkDetailsCardActionComponent } from '../vk-details-card-action/vk-details-card-action.component';

const meta: Meta = {
  title: 'Card with Actions List',
  component: VkDetailsCardActionsComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkDetailsCardActionsComponent, VkDetailsCardActionComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkDetailsCardActionsComponent>;

export const CardWithActionsList: Story = {
  render: () => ({
    template: `<vk-details-card-actions>
    <vk-details-card-action icon="plus"></vk-details-card-action>
    <vk-details-card-action src="https://icons.veryicon.com/png/128/miscellaneous/gameui/icon_-hall.png" alt="Home" ></vk-details-card-action>
    <vk-details-card-action icon="rotate"></vk-details-card-action>
    </vk-details-card-actions>`,
  }),
};
