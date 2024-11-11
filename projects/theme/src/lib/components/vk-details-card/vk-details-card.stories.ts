import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkDetailsCardComponent } from './vk-details-card.component';
import { VkDetailsCardTitleComponent } from '../vk-details-card-title/vk-details-card-title.component';
import { VkDetailsCardActionComponent } from '../vk-details-card-action/vk-details-card-action.component';
import { VkDetailsCardActionsComponent } from '../vk-details-card-actions/vk-details-card-actions.component';
import { VkDetailsCardHiddenActionComponent } from '../vk-details-card-hidden-action/vk-details-card-hidden-action.component';
import { VkDetailsCardHiddenActionsComponent } from '../vk-details-card-hidden-actions/vk-details-card-hidden-actions.component';

const meta: Meta = {
  title: 'Card with Actions',
  component: VkDetailsCardComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        VkDetailsCardComponent,
        VkDetailsCardTitleComponent,
        VkDetailsCardActionComponent,
        VkDetailsCardActionsComponent,
        VkDetailsCardHiddenActionComponent,
        VkDetailsCardHiddenActionsComponent,
      ],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkDetailsCardComponent>;

export const CardWithActionsDefault: Story = {
  render: () => ({
    template: `<vk-details-card>

    <vk-details-card-title title>Books List</vk-details-card-title>

    <vk-details-card-actions actions>
    <vk-details-card-action
        src="https://static.thenounproject.com/png/687044-200.png"
        alt="Edit"
      ></vk-details-card-action>
    <vk-details-card-action icon="rotate" ></vk-details-card-action>
    <vk-details-card-action src="https://icons.veryicon.com/png/128/miscellaneous/gameui/icon_-hall.png" alt="Home" ></vk-details-card-action >

    </vk-details-card-actions>

    <div content>Remaining is Content space</div>

    </vk-details-card>`,
  }),
};
export const CardWithHiddenActions: Story = {
  render: () => ({
    template: `<vk-details-card color="teal">

    <vk-details-card-title title>Books List</vk-details-card-title>

    <vk-details-card-hidden-actions actions>
    <vk-details-card-hidden-action
      >Edit</vk-details-card-hidden-action
    >
    <vk-details-card-hidden-action
      >Delete</vk-details-card-hidden-action
    >
    <vk-details-card-hidden-action
      >Home</vk-details-card-hidden-action
    >
  </vk-details-card-hidden-actions>

    <div content>Remaining is Content space</div>

    </vk-details-card>`,
  }),
};
