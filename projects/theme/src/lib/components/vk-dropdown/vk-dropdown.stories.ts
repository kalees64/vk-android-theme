import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { VkDropdownComponent } from './vk-dropdown.component';
import { VkDropdownItemComponent } from '../vk-dropdown-item/vk-dropdown-item.component';
import { provideRouter } from '@angular/router';
import { VkDropdownSeperatorComponent } from '../vk-dropdown-seperator/vk-dropdown-seperator.component';

const meta: Meta = {
  title: 'Dropdown',
  component: VkDropdownComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([{ path: '**', component: VkDropdownItemComponent }]),
      ],
    }),
    moduleMetadata({
      imports: [
        VkDropdownComponent,
        VkDropdownItemComponent,
        VkDropdownSeperatorComponent,
      ],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkDropdownComponent>;

export const Dropdown: Story = {
  render: () => ({
    template: `<vk-dropdown>

    <vk-dropdown-item href="#">Home</vk-dropdown-item>
    </vk-dropdown>`,
  }),
};

export const Dropdown1: Story = {
  render: () => ({
    template: `<vk-dropdown label="Nav" color="lime">

    <vk-dropdown-item href="#">Home</vk-dropdown-item><vk-dropdown-seperator/>
    <vk-dropdown-item href="#">About</vk-dropdown-item>
    <vk-dropdown-item href="#">Contact</vk-dropdown-item>
    </vk-dropdown>`,
  }),
};

export const DropdownTop: Story = {
  render: () => ({
    template: `<vk-dropdown label="Nav" color="cyan" position="top" >

    <vk-dropdown-item href="#">Home</vk-dropdown-item>
    <vk-dropdown-item href="#">About</vk-dropdown-item><vk-dropdown-seperator/>
    <vk-dropdown-item href="#">Contact</vk-dropdown-item>
    </vk-dropdown>`,
  }),
};

export const DropdownLeft: Story = {
  render: () => ({
    template: `<vk-dropdown label="Nav" color="red" position="left" >

    <vk-dropdown-item href="#">Home</vk-dropdown-item>
    <vk-dropdown-item href="#">About</vk-dropdown-item><vk-dropdown-seperator/>
    <vk-dropdown-item href="#">Contact</vk-dropdown-item>
    </vk-dropdown>`,
  }),
};

export const DropdownRight: Story = {
  render: () => ({
    template: `<vk-dropdown label="Nav" color="yellow" position="right" >

    <vk-dropdown-item href="#">Home</vk-dropdown-item>
    <vk-dropdown-item href="#">About</vk-dropdown-item>
    <vk-dropdown-seperator/>
    <vk-dropdown-item href="#">Contact</vk-dropdown-item>
    </vk-dropdown>`,
  }),
};
