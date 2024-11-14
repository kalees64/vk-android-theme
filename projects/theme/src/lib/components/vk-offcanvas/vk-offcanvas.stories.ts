import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkOffcanvasComponent } from './vk-offcanvas.component';
import { VkOffcanvasTitleComponent } from '../vk-offcanvas-title/vk-offcanvas-title.component';
import { VkOffcanvasBodyComponent } from '../vk-offcanvas-body/vk-offcanvas-body.component';

const meta: Meta = {
  title: 'Offcanvas',
  component: VkOffcanvasComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        VkOffcanvasComponent,
        VkOffcanvasTitleComponent,
        VkOffcanvasBodyComponent,
      ],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkOffcanvasComponent>;

export const Offcanvas: Story = {
  render: () => ({
    template: `<vk-offcanvas>
    <vk-offcanvas-title title>Offcanvas Title</vk-offcanvas-title>

    <vk-offcanvas-body body>Offcanvas Body , Enter Your Contents here</vk-offcanvas-body>
    </vk-offcanvas>`,
  }),
};

export const OffcanvasCustomButton: Story = {
  render: () => ({
    template: `<vk-offcanvas btnColor="red" btnLabel="Custom label & color for button">
    <vk-offcanvas-title title>Offcanvas Title</vk-offcanvas-title>

    <vk-offcanvas-body body>Offcanvas Body , Enter Your Contents here</vk-offcanvas-body>
    </vk-offcanvas>`,
  }),
};

export const OffcanvasRight: Story = {
  render: () => ({
    template: `<vk-offcanvas btnColor="teal" btnLabel="Canvas Right" position='right'>
    <vk-offcanvas-title title>Offcanvas Title</vk-offcanvas-title>

    <vk-offcanvas-body body>Offcanvas Body , Enter Your Contents here</vk-offcanvas-body>
    </vk-offcanvas>`,
  }),
};

export const OffcanvasTop: Story = {
  render: () => ({
    template: `<vk-offcanvas btnColor="green" btnLabel="Canvas Top" position='top'>
    <vk-offcanvas-title title>Offcanvas Title</vk-offcanvas-title>

    <vk-offcanvas-body body>Offcanvas Body , Enter Your Contents here</vk-offcanvas-body>
    </vk-offcanvas>`,
  }),
};

export const OffcanvasBottom: Story = {
  render: () => ({
    template: `<vk-offcanvas btnColor="pink" btnLabel="Canvas Bottom" position='bottom'>
    <vk-offcanvas-title title>Offcanvas Title</vk-offcanvas-title>

    <vk-offcanvas-body body>Offcanvas Body , Enter Your Contents here</vk-offcanvas-body>
    </vk-offcanvas>`,
  }),
};
