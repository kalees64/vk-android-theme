import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkModalFooterComponent } from './vk-modal-footer.component';

const meta: Meta = {
  title: 'Modal Footer',
  component: VkModalFooterComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkModalFooterComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkModalFooterComponent>;

export const ModalFooter: Story = {
  render: () => ({
    template: `<vk-modal-footer>Modal Footer Content</vk-modal-footer>`,
  }),
};
