import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { VkBreadcrumbItemActiveComponent } from './vk-breadcrumb-item-active.component';

const meta: Meta = {
  title: 'Breadcrumb Item Active',
  component: VkBreadcrumbItemActiveComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkBreadcrumbItemActiveComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkBreadcrumbItemActiveComponent>;

export const BreadcrumbItemActive: Story = {
  render: () => ({
    template: `<vk-breadcrumb-item-active>Home</vk-breadcrumb-item-active>`,
  }),
};
