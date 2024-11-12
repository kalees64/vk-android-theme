import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkCardWidgetComponent } from './vk-card-widget.component';

const meta: Meta = {
  title: 'Card Widget',
  component: VkCardWidgetComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkCardWidgetComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkCardWidgetComponent>;

export const CardWidgetDefault: Story = {
  render: () => ({
    template: `<vk-card-widget label="My Priority">64</vk-card-widget>`,
  }),
};

export const CardWidgetBlue: Story = {
  render: () => ({
    template: `<vk-card-widget label="My Priority" color="blue">64</vk-card-widget>`,
  }),
};

export const CardWidgetRed: Story = {
  render: () => ({
    template: `<vk-card-widget label="My Priority" color="red">64</vk-card-widget>`,
  }),
};

export const CardWidgetGreen: Story = {
  render: () => ({
    template: `<vk-card-widget label="My Priority" color="green">64</vk-card-widget>`,
  }),
};

export const CardWidgetYellow: Story = {
  render: () => ({
    template: `<vk-card-widget label="My Priority" color="yellow">64</vk-card-widget>`,
  }),
};

export const CardWidgetOrange: Story = {
  render: () => ({
    template: `<vk-card-widget label="My Priority" color="orange">64</vk-card-widget>`,
  }),
};

export const CardWidgetPink: Story = {
  render: () => ({
    template: `<vk-card-widget label="My Priority" color="pink">64</vk-card-widget>`,
  }),
};

export const CardWidgetTeal: Story = {
  render: () => ({
    template: `<vk-card-widget label="My Priority" color="teal">64</vk-card-widget>`,
  }),
};

export const CardWidgetDark: Story = {
  render: () => ({
    template: `<vk-card-widget label="My Priority" color="dark">64</vk-card-widget>`,
  }),
};

export const CardWidgetPurple: Story = {
  render: () => ({
    template: `<vk-card-widget label="My Priority" color="purple">64</vk-card-widget>`,
  }),
};

export const CardWidgetLime: Story = {
  render: () => ({
    template: `<vk-card-widget label="My Priority" color="lime">64</vk-card-widget>`,
  }),
};
