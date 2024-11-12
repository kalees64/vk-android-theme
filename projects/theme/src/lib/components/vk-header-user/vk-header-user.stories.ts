import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkHeaderUserComponent } from './vk-header-user.component';

const meta: Meta = {
  title: 'Header User Name & Logo',
  component: VkHeaderUserComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkHeaderUserComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkHeaderUserComponent>;

export const HeaderUserNameWithImage: Story = {
  render: () => ({
    template: `<vk-header-user src="https://png.pngtree.com/png-vector/20220630/ourmid/pngtree-fire-flame-logo-template-png-image_5632642.png" alt="profile"  >Name</vk-header-user>`,
  }),
};

export const HeaderUserNameWithLogo: Story = {
  render: () => ({
    template: `<vk-header-user icon="user"  >Name</vk-header-user>`,
  }),
};
