import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { VkHeaderComponent } from './vk-header.component';

import { VkHeaderLinksLeftComponent } from '../vk-header-links-left/vk-header-links-left.component';
import { VkHeaderLinksRightComponent } from '../vk-header-links-right/vk-header-links-right.component';
import { VkHeaderUserComponent } from '../vk-header-user/vk-header-user.component';
import { provideRouter } from '@angular/router';
import { VkHeaderMenuComponent } from '../vk-header-menu/vk-header-menu.component';
import { VkHeaderMenuLinkComponent } from '../vk-header-menu-link/vk-header-menu-link.component';
import { VkNavBrandComponent } from '../vk-nav-brand/vk-nav-brand.component';
import { VkNavLogoComponent } from '../vk-nav-logo/vk-nav-logo.component';
import { VkLinkComponent } from '../vk-link/vk-link.component';

const meta: Meta = {
  title: 'Header',
  component: VkHeaderComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([{ path: '**', component: VkHeaderComponent }]),
      ],
    }),
    moduleMetadata({
      imports: [
        VkNavBrandComponent,
        VkNavLogoComponent,
        VkHeaderLinksLeftComponent,
        VkHeaderLinksRightComponent,
        VkHeaderUserComponent,
        VkLinkComponent,
        VkHeaderMenuComponent,
        VkHeaderMenuLinkComponent,
      ],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkHeaderComponent>;

export const HeaderDefault: Story = {
  render: () => ({
    template: `<vk-header logoutFn="yourFn()">
    <vk-nav-brand nav-brand>Brand</vk-nav-brand>

    <vk-nav-logo nav-logo
  src="https://png.pngtree.com/png-vector/20241019/ourlarge/pngtree-logo-for-national-health-day-2024-60-years-of-hkn-download-vector-png-image_14113444.png"
  alt="Logo"
  shape="rect"
></vk-nav-logo>

<vk-header-links-left  links-left>
  <vk-link href="#" color="blue-d">Home</vk-link>
  <vk-link href="#" color="blue-d">Profile</vk-link>
  <vk-link href="#" color="blue-d">About</vk-link>
</vk-header-links-left>

<vk-header-links-right links-right >
  <vk-link href="#" color="blue-d">Home</vk-link>
  <vk-link href="#" color="blue-d">Profile</vk-link>
  <vk-link href="#" color="blue-d">About</vk-link>
</vk-header-links-right>

<vk-header-menu menu>
<vk-header-menu-link href="#">Home</vk-header-menu-link>
<vk-header-menu-link href="#">About</vk-header-menu-link>
<vk-header-menu-link href="#">Profile</vk-header-menu-link>
    </vk-header-menu>

<vk-header-user icon="user" user>Name</vk-header-user>

    </vk-header>`,
  }),
};

export const HeaderBlue: Story = {
  render: () => ({
    template: `<vk-header color="blue" logoutFn="yourFn()">
    <vk-nav-brand nav-brand>Brand</vk-nav-brand>

    <vk-nav-logo nav-logo
  src="https://png.pngtree.com/png-vector/20241019/ourlarge/pngtree-logo-for-national-health-day-2024-60-years-of-hkn-download-vector-png-image_14113444.png"
  alt="Logo"
  shape="rect"
></vk-nav-logo>

<vk-header-links-left  links-left>
  <vk-link href="#" color="blue-d">Home</vk-link>
  <vk-link href="#" color="blue-d">Profile</vk-link>
  <vk-link href="#" color="blue-d">About</vk-link>
</vk-header-links-left>

<vk-header-links-right links-right >
  <vk-link href="#" color="blue-d">Home</vk-link>
  <vk-link href="#" color="blue-d">Profile</vk-link>
  <vk-link href="#" color="blue-d">About</vk-link>
</vk-header-links-right>

<vk-header-menu menu>
<vk-header-menu-link href="#" color="blue">Home</vk-header-menu-link>
<vk-header-menu-link href="#" color="blue">About</vk-header-menu-link>
<vk-header-menu-link href="#" color="blue">Profile</vk-header-menu-link>
    </vk-header-menu>

<vk-header-user icon="user" user>Name</vk-header-user>

    </vk-header>`,
  }),
};

export const HeaderRed: Story = {
  render: () => ({
    template: `<vk-header color="red" logoutFn="yourFn()">
    <vk-nav-brand nav-brand>Brand</vk-nav-brand>

    <vk-nav-logo nav-logo
  src="https://png.pngtree.com/png-vector/20241019/ourlarge/pngtree-logo-for-national-health-day-2024-60-years-of-hkn-download-vector-png-image_14113444.png"
  alt="Logo"
  shape="rect"
></vk-nav-logo>

<vk-header-links-left  links-left>
  <vk-link href="#" color="blue-d">Home</vk-link>
  <vk-link href="#" color="blue-d">Profile</vk-link>
  <vk-link href="#" color="blue-d">About</vk-link>
</vk-header-links-left>

<vk-header-links-right links-right >
  <vk-link href="#" color="blue-d">Home</vk-link>
  <vk-link href="#" color="blue-d">Profile</vk-link>
  <vk-link href="#" color="blue-d">About</vk-link>
</vk-header-links-right>

<vk-header-menu menu>
<vk-header-menu-link href="#" color="red">Home</vk-header-menu-link>
<vk-header-menu-link href="#" color="red">About</vk-header-menu-link>
<vk-header-menu-link href="#" color="red">Profile</vk-header-menu-link>
    </vk-header-menu>

<vk-header-user icon="user" user>Name</vk-header-user>

    </vk-header>`,
  }),
};

export const HeaderGreen: Story = {
  render: () => ({
    template: `<vk-header color="green" logoutFn="yourFn()">
    <vk-nav-brand nav-brand>Brand</vk-nav-brand>

    <vk-nav-logo nav-logo
  src="https://png.pngtree.com/png-vector/20241019/ourlarge/pngtree-logo-for-national-health-day-2024-60-years-of-hkn-download-vector-png-image_14113444.png"
  alt="Logo"
  shape="rect"
></vk-nav-logo>

<vk-header-links-left  links-left>
  <vk-link href="#" color="blue-d">Home</vk-link>
  <vk-link href="#" color="blue-d">Profile</vk-link>
  <vk-link href="#" color="blue-d">About</vk-link>
</vk-header-links-left>

<vk-header-links-right links-right >
  <vk-link href="#" color="blue-d">Home</vk-link>
  <vk-link href="#" color="blue-d">Profile</vk-link>
  <vk-link href="#" color="blue-d">About</vk-link>
</vk-header-links-right>

<vk-header-menu menu>
<vk-header-menu-link href="#" color="green">Home</vk-header-menu-link>
<vk-header-menu-link href="#" color="green">About</vk-header-menu-link>
<vk-header-menu-link href="#" color="green">Profile</vk-header-menu-link>
    </vk-header-menu>

<vk-header-user icon="user" user>Name</vk-header-user>

    </vk-header>`,
  }),
};

export const HeaderYellow: Story = {
  render: () => ({
    template: `<vk-header color="yellow" logoutFn="yourFn()">
    <vk-nav-brand nav-brand>Brand</vk-nav-brand>

    <vk-nav-logo nav-logo
  src="https://png.pngtree.com/png-vector/20241019/ourlarge/pngtree-logo-for-national-health-day-2024-60-years-of-hkn-download-vector-png-image_14113444.png"
  alt="Logo"
  shape="rect"
></vk-nav-logo>

<vk-header-links-left  links-left>
  <vk-link href="#" color="blue-d">Home</vk-link>
  <vk-link href="#" color="blue-d">Profile</vk-link>
  <vk-link href="#" color="blue-d">About</vk-link>
</vk-header-links-left>

<vk-header-links-right links-right >
  <vk-link href="#" color="blue-d">Home</vk-link>
  <vk-link href="#" color="blue-d">Profile</vk-link>
  <vk-link href="#" color="blue-d">About</vk-link>
</vk-header-links-right>

<vk-header-menu menu>
<vk-header-menu-link href="#" color="yellow">Home</vk-header-menu-link>
<vk-header-menu-link href="#" color="yellow">About</vk-header-menu-link>
<vk-header-menu-link href="#" color="yellow">Profile</vk-header-menu-link>
    </vk-header-menu>

<vk-header-user icon="user" user>Name</vk-header-user>

    </vk-header>`,
  }),
};
