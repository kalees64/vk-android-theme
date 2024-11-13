import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkModalTitleComponent } from './vk-modal-title.component';

const meta: Meta = {
  title: 'Modal Title',
  component: VkModalTitleComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkModalTitleComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkModalTitleComponent>;

export const ModalTitle: Story = {
  render: () => ({
    template: `<vk-modal-title>Modal Title</vk-modal-title>`,
  }),
};
