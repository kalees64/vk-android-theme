import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkOffcanvasBodyComponent } from './vk-offcanvas-body.component';

const meta: Meta = {
  title: 'Offcanvas Body',
  component: VkOffcanvasBodyComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkOffcanvasBodyComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkOffcanvasBodyComponent>;

export const OffcanvasTitle: Story = {
  render: () => ({
    template: `<vk-offcanvas-body>Offcanvas Body , Enter Your Contents here</vk-offcanvas-body>`,
  }),
};
