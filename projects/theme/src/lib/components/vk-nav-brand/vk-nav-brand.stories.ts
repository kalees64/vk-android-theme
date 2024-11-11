import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkNavBrandComponent } from './vk-nav-brand.component';

const meta: Meta = {
  title: 'Navbar Brand',
  component: VkNavBrandComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkNavBrandComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkNavBrandComponent>;

export const NavBrandDefault: Story = {
  render: () => ({
    template: `<vk-nav-brand>Brand</vk-nav-brand>`,
  }),
};

export const NavBrandLight: Story = {
  render: () => ({
    template: `<vk-nav-brand color="light">Brand</vk-nav-brand>`,
  }),
};

export const NavBrandBlue: Story = {
  render: () => ({
    template: `<vk-nav-brand color="blue">Brand</vk-nav-brand>`,
  }),
};

export const NavBrandRed: Story = {
  render: () => ({
    template: `<vk-nav-brand color="red">Brand</vk-nav-brand>`,
  }),
};

export const NavBrandGreen: Story = {
  render: () => ({
    template: `<vk-nav-brand color="green">Brand</vk-nav-brand>`,
  }),
};
