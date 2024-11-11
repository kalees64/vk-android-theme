import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { VkDetailsCardLinkComponent } from './vk-details-card-link.component';
import { provideRouter } from '@angular/router';

const meta: Meta = {
  title: 'Card with Actions Link',
  component: VkDetailsCardLinkComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([{ path: '**', component: VkDetailsCardLinkComponent }]),
      ],
    }),
    moduleMetadata({
      imports: [VkDetailsCardLinkComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkDetailsCardLinkComponent>;

export const CardWithActionsLink: Story = {
  render: () => ({
    template: `<vk-details-card-link href="#" icon="plus"></vk-details-card-link>`,
  }),
};

export const CardWithActionsLink1: Story = {
  render: () => ({
    template: `<vk-details-card-link href="#" src="https://icons.veryicon.com/png/128/miscellaneous/gameui/icon_-hall.png" alt="Home"></vk-details-card-link>`,
  }),
};
