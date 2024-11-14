import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkOffcanvasTitleComponent } from './vk-offcanvas-title.component';

const meta: Meta = {
  title: 'Offcanvas Title',
  component: VkOffcanvasTitleComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkOffcanvasTitleComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkOffcanvasTitleComponent>;

export const OffcanvasTitle: Story = {
  render: () => ({
    template: `<vk-offcanvas-title>Offcanvas Title</vk-offcanvas-title>`,
  }),
};
