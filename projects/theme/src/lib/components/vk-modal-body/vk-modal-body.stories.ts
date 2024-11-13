import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkModalBodyComponent } from './vk-modal-body.component';

const meta: Meta = {
  title: 'Modal Body',
  component: VkModalBodyComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkModalBodyComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkModalBodyComponent>;

export const ModalBody: Story = {
  render: () => ({
    template: `<vk-modal-body>Modal Body Content</vk-modal-body>`,
  }),
};
