import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { VkBreadcrumbItemComponent } from './vk-breadcrumb-item.component';
import { provideRouter } from '@angular/router';

const meta: Meta = {
  title: 'Breadcrumb Item',
  component: VkBreadcrumbItemComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([{ path: '**', component: VkBreadcrumbItemComponent }]),
      ],
    }),
    moduleMetadata({
      imports: [VkBreadcrumbItemComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkBreadcrumbItemComponent>;

export const BreadcrumbItem: Story = {
  render: () => ({
    template: `<vk-breadcrumb-item href="#">Home</vk-breadcrumb-item>`,
  }),
};
