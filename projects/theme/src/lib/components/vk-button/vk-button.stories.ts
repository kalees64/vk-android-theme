import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkButtonComponent } from './vk-button.component';

const meta: Meta = {
  title: 'Button',
  component: VkButtonComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkButtonComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkButtonComponent>;

export const Button: Story = {
  render: (args) => ({
    props: args,
    template: `<vk-button >Button</vk-button>`,
  }),
};

export const ButtonDark: Story = {
  render: (args) => ({
    props: args,
    template: `<vk-button color="dark">Button</vk-button>`,
  }),
};

export const ButtonLight: Story = {
  render: (args) => ({
    props: args,
    template: `<vk-button color="light">Button</vk-button>`,
  }),
};

export const ButtonBlue: Story = {
  render: (args) => ({
    props: args,
    template: `<vk-button color="blue">Button</vk-button>`,
  }),
};

export const ButtonRed: Story = {
  render: (args) => ({
    props: args,
    template: `<vk-button color="red">Button</vk-button>`,
  }),
};

export const ButtonGreen: Story = {
  render: (args) => ({
    props: args,
    template: `<vk-button color="green">Button</vk-button>`,
  }),
};

export const ButtonYellow: Story = {
  render: (args) => ({
    props: args,
    template: `<vk-button color="yellow">Button</vk-button>`,
  }),
};

export const ButtonDisabled: Story = {
  render: (args) => ({
    props: args,
    template: `<vk-button color="blue" [disabled]="true">Button</vk-button>`,
  }),
};
