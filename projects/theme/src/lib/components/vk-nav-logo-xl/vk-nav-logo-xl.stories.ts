import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkNavLogoXlComponent } from './vk-nav-logo-xl.component';

const meta: Meta = {
  title: 'Navbar Logo Extra Large',
  component: VkNavLogoXlComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkNavLogoXlComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkNavLogoXlComponent>;

export const NavLogoDefault: Story = {
  render: () => ({
    template: `<vk-nav-logo-xl src="https://png.pngtree.com/png-vector/20240920/ourlarge/pngtree-sound-system-racing-team-logo-vector-png-image_13871760.png" alt="Logo" ></vk-nav-logo-xl>`,
  }),
};

export const NavLogoRectangle: Story = {
  render: () => ({
    template: `<vk-nav-logo-xl src="https://png.pngtree.com/png-vector/20241019/ourlarge/pngtree-logo-for-national-health-day-2024-60-years-of-hkn-download-vector-png-image_14113444.png" alt="Logo" shape="rect" ></vk-nav-logo-xl>`,
  }),
};

export const NavLogoRounded: Story = {
  render: () => ({
    template: `<vk-nav-logo-xl src="https://png.pngtree.com/png-vector/20241025/ourlarge/pngtree-official-logo-of-korpri-53-2024-vector-png-image_14167392.png" alt="Logo" shape="round" ></vk-nav-logo-xl>`,
  }),
};
