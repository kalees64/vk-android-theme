import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkAlertComponent } from './vk-alert.component';

const meta: Meta = {
  title: 'Alert',
  component: VkAlertComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkAlertComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkAlertComponent>;

export const AlertDefault: Story = {
  render: () => ({
    template: `<vk-alert>Alert</vk-alert>`,
  }),
};

export const AlertBlue: Story = {
  render: () => ({
    template: `<vk-alert color="blue">Alert</vk-alert>`,
  }),
};

export const AlertRed: Story = {
  render: () => ({
    template: `<vk-alert color="red">Alert</vk-alert>`,
  }),
};

export const AlertGreen: Story = {
  render: () => ({
    template: `<vk-alert color="green">Alert</vk-alert>`,
  }),
};

export const AlertYellow: Story = {
  render: () => ({
    template: `<vk-alert color="yellow">Alert</vk-alert>`,
  }),
};
