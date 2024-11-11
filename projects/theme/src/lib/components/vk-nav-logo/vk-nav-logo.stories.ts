import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkNavLogoComponent } from './vk-nav-logo.component';

const meta: Meta = {
  title: 'Navbar Logo',
  component: VkNavLogoComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkNavLogoComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkNavLogoComponent>;

export const NavLogoDefault: Story = {
  render: () => ({
    template: `<vk-nav-logo src="https://png.pngtree.com/png-vector/20240920/ourlarge/pngtree-sound-system-racing-team-logo-vector-png-image_13871760.png" alt="Logo" ></vk-nav-logo>`,
  }),
};

export const NavLogoRectangle: Story = {
  render: () => ({
    template: `<vk-nav-logo src="https://png.pngtree.com/png-vector/20241019/ourlarge/pngtree-logo-for-national-health-day-2024-60-years-of-hkn-download-vector-png-image_14113444.png" alt="Logo" shape="rect" ></vk-nav-logo>`,
  }),
};

export const NavLogoRounded: Story = {
  render: () => ({
    template: `<vk-nav-logo src="https://png.pngtree.com/png-vector/20241025/ourlarge/pngtree-official-logo-of-korpri-53-2024-vector-png-image_14167392.png" alt="Logo" shape="round" ></vk-nav-logo>`,
  }),
};
