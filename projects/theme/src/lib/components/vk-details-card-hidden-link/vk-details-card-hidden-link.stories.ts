import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { VkDetailsCardHiddenLinkComponent } from './vk-details-card-hidden-link.component';
import { provideRouter } from '@angular/router';

const meta: Meta = {
  title: 'Hidden Actions Menu Item Link',
  component: VkDetailsCardHiddenLinkComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([
          { path: '**', component: VkDetailsCardHiddenLinkComponent },
        ]),
      ],
    }),
    moduleMetadata({
      imports: [VkDetailsCardHiddenLinkComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkDetailsCardHiddenLinkComponent>;

export const HiddenActionMenuItemLink: Story = {
  render: () => ({
    template: `<vk-details-card-hidden-link href="#">Edit</vk-details-card-hidden-link>`,
  }),
};
