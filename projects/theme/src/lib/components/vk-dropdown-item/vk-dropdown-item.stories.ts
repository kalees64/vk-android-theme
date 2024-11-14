import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { VkDropdownItemComponent } from './vk-dropdown-item.component';
import { provideRouter } from '@angular/router';

const meta: Meta = {
  title: 'Dropdown Item',
  component: VkDropdownItemComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([{ path: '**', component: VkDropdownItemComponent }]),
      ],
    }),
    moduleMetadata({
      imports: [VkDropdownItemComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkDropdownItemComponent>;

export const DropdownItem: Story = {
  render: () => ({
    template: `<vk-dropdown-item href="#">Home</vk-dropdown-item>`,
  }),
};
