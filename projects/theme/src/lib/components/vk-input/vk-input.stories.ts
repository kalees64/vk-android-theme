import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkInputComponent } from './vk-input.component';

const meta: Meta = {
  title: 'Form Input',
  component: VkInputComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkInputComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkInputComponent>;

export const InputDefault: Story = {
  render: () => ({
    template: `<vk-input/>`,
  }),
};

export const InputValid: Story = {
  render: () => ({
    template: `<vk-input [valid]="true"/>`,
  }),
};

export const InputInvalid: Story = {
  render: () => ({
    template: `<vk-input [invalid]="true"/>`,
  }),
};

export const InputDisabled: Story = {
  render: () => ({
    template: `<vk-input [disabled]="true" value="John Durairaj"/>`,
  }),
};

export const InputReadOnly: Story = {
  render: () => ({
    template: `<vk-input [readonly]="true" value="John Durairaj"/>`,
  }),
};
