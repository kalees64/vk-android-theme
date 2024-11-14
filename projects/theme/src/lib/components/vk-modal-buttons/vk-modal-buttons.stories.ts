import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkModalButtonsComponent } from './vk-modal-buttons.component';
import { VkButtonComponent } from '../vk-button/vk-button.component';

const meta: Meta = {
  title: 'Modal Buttons',
  component: VkModalButtonsComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkModalButtonsComponent, VkButtonComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkModalButtonsComponent>;

export const ModalButtons: Story = {
  render: () => ({
    template: `<vk-modal-buttons><vk-button color="blue">Button 1</vk-button>
        <vk-button color="green">Button 1</vk-button></vk-modal-buttons>`,
  }),
};
