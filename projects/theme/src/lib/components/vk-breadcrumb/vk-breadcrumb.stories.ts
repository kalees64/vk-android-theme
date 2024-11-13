import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { VkBreadcrumbComponent } from './vk-breadcrumb.component';
import { VkBreadcrumbItemComponent } from '../vk-breadcrumb-item/vk-breadcrumb-item.component';
import { VkBreadcrumbItemActiveComponent } from '../vk-breadcrumb-item-active/vk-breadcrumb-item-active.component';

const meta: Meta = {
  title: 'Breadcrumb',
  component: VkBreadcrumbComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([{ path: '**', component: VkBreadcrumbItemComponent }]),
      ],
    }),
    moduleMetadata({
      imports: [
        VkBreadcrumbComponent,
        VkBreadcrumbItemComponent,
        VkBreadcrumbItemActiveComponent,
      ],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkBreadcrumbComponent>;

export const BreadcrumbItem: Story = {
  render: () => ({
    template: `<vk-breadcrumb>

    <vk-breadcrumb-item href="#">Home</vk-breadcrumb-item>

    <vk-breadcrumb-item href="#">Dashboard</vk-breadcrumb-item>

    <vk-breadcrumb-item-active>Profile</vk-breadcrumb-item-active>

    </vk-breadcrumb>`,
  }),
};
