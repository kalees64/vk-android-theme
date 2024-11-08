import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkButtonGradientComponent } from './vk-button-gradient.component';

const meta: Meta = {
  title: 'Button Gradient',
  component: VkButtonGradientComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkButtonGradientComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkButtonGradientComponent>;

export const ButtonDefault: Story = {
  render: () => ({
    template: `<vk-button-gradient>Button</vk-button-gradient>`,
  }),
};

export const ButtonBlue: Story = {
  render: () => ({
    template: `<vk-button-gradient color="blue">Button</vk-button-gradient>`,
  }),
};

export const ButtonRed: Story = {
  render: () => ({
    template: `<vk-button-gradient color="red">Button</vk-button-gradient>`,
  }),
};

export const ButtonGreen: Story = {
  render: () => ({
    template: `<vk-button-gradient color="green">Button</vk-button-gradient>`,
  }),
};

export const ButtonYellow: Story = {
  render: () => ({
    template: `<vk-button-gradient color="yellow">Button</vk-button-gradient>`,
  }),
};

export const ButtonDisabled: Story = {
  render: () => ({
    template: `<vk-button-gradient [disabled]="true">Button</vk-button-gradient>`,
  }),
};
