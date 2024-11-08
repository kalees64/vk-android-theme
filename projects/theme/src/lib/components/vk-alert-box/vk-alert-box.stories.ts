import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkAlertBoxComponent } from './vk-alert-box.component';

const meta: Meta = {
  title: 'Alert Box',
  component: VkAlertBoxComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkAlertBoxComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkAlertBoxComponent>;

export const AlertBoxDefault: Story = {
  render: () => ({
    template: `<vk-alert-box>Alert</vk-alert-box>`,
  }),
};

export const AlertBoxBlue: Story = {
  render: () => ({
    template: `<vk-alert-box color="blue">Alert</vk-alert-box>`,
  }),
};

export const AlertBoxRed: Story = {
  render: () => ({
    template: `<vk-alert-box color="red">Alert</vk-alert-box>`,
  }),
};

export const AlertBoxGreen: Story = {
  render: () => ({
    template: `<vk-alert-box color="green">Alert</vk-alert-box>`,
  }),
};

export const AlertBoxYellow: Story = {
  render: () => ({
    template: `<vk-alert-box color="yellow">Alert</vk-alert-box>`,
  }),
};
