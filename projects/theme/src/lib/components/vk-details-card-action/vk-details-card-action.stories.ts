import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkDetailsCardActionComponent } from './vk-details-card-action.component';

const meta: Meta = {
  title: 'Card with Actions Button',
  component: VkDetailsCardActionComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkDetailsCardActionComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkDetailsCardActionComponent>;

export const CardWithActionsButton: Story = {
  render: () => ({
    template: `<vk-details-card-action icon="arrows-rotate"></vk-details-card-action>`,
  }),
};

export const CardWithActionsButton1: Story = {
  render: () => ({
    template: `<vk-details-card-action src="https://icons.veryicon.com/png/128/miscellaneous/gameui/icon_-hall.png" alt="Home"></vk-details-card-action>`,
  }),
};
