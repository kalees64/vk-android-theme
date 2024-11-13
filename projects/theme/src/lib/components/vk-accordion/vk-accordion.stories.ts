import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkAccordionComponent } from './vk-accordion.component';

const meta: Meta = {
  title: 'Accordion',
  component: VkAccordionComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [VkAccordionComponent],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkAccordionComponent>;

export const AccordionDefault: Story = {
  render: () => ({
    template: `<vk-accordion>
    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quia sit
    dignissimos sapiente dolore commodi, adipisci quae ipsum saepe ab. Iure
    saepe libero sequi earum ratione possimus voluptas, minus dicta.
  </p>
    </vk-accordion>
    `,
  }),
};

export const AccordionBlack: Story = {
  render: () => ({
    template: `
    <vk-accordion title="Accordion 1" color="black">
    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quia sit
    dignissimos sapiente dolore commodi, adipisci quae ipsum saepe ab. Iure
    saepe libero sequi earum ratione possimus voluptas, minus dicta.
  </p>
    </vk-accordion>`,
  }),
};

export const AccordionTransparent: Story = {
  render: () => ({
    template: `
    <vk-accordion title="Accordion 1" color="transparent">
    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quia sit
    dignissimos sapiente dolore commodi, adipisci quae ipsum saepe ab. Iure
    saepe libero sequi earum ratione possimus voluptas, minus dicta.
  </p>
    </vk-accordion>`,
  }),
};

export const AccordionBlue: Story = {
  render: () => ({
    template: `
    <vk-accordion title="Accordion 1" color="blue">
    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quia sit
    dignissimos sapiente dolore commodi, adipisci quae ipsum saepe ab. Iure
    saepe libero sequi earum ratione possimus voluptas, minus dicta.
  </p>
    </vk-accordion>`,
  }),
};

export const AccordionRed: Story = {
  render: () => ({
    template: `
    <vk-accordion title="Accordion 1" color="red">
    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quia sit
    dignissimos sapiente dolore commodi, adipisci quae ipsum saepe ab. Iure
    saepe libero sequi earum ratione possimus voluptas, minus dicta.
  </p>
    </vk-accordion>`,
  }),
};

export const AccordionGreen: Story = {
  render: () => ({
    template: `
    <vk-accordion title="Accordion 1" color="green">
    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quia sit
    dignissimos sapiente dolore commodi, adipisci quae ipsum saepe ab. Iure
    saepe libero sequi earum ratione possimus voluptas, minus dicta.
  </p>
    </vk-accordion>`,
  }),
};

export const AccordionYellow: Story = {
  render: () => ({
    template: `
    <vk-accordion title="Accordion 1" color="yellow">
    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quia sit
    dignissimos sapiente dolore commodi, adipisci quae ipsum saepe ab. Iure
    saepe libero sequi earum ratione possimus voluptas, minus dicta.
  </p>
    </vk-accordion>`,
  }),
};

export const AccordionOrange: Story = {
  render: () => ({
    template: `
    <vk-accordion title="Accordion 1" color="orange">
    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quia sit
    dignissimos sapiente dolore commodi, adipisci quae ipsum saepe ab. Iure
    saepe libero sequi earum ratione possimus voluptas, minus dicta.
  </p>
    </vk-accordion>`,
  }),
};

export const AccordionPink: Story = {
  render: () => ({
    template: `
    <vk-accordion title="Accordion 1" color="pink">
    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quia sit
    dignissimos sapiente dolore commodi, adipisci quae ipsum saepe ab. Iure
    saepe libero sequi earum ratione possimus voluptas, minus dicta.
  </p>
    </vk-accordion>`,
  }),
};

export const AccordionRose: Story = {
  render: () => ({
    template: `
    <vk-accordion title="Accordion 1" color="rose">
    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quia sit
    dignissimos sapiente dolore commodi, adipisci quae ipsum saepe ab. Iure
    saepe libero sequi earum ratione possimus voluptas, minus dicta.
  </p>
    </vk-accordion>`,
  }),
};

export const AccordionTeal: Story = {
  render: () => ({
    template: `
    <vk-accordion title="Accordion 1" color="teal">
    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quia sit
    dignissimos sapiente dolore commodi, adipisci quae ipsum saepe ab. Iure
    saepe libero sequi earum ratione possimus voluptas, minus dicta.
  </p>
    </vk-accordion>`,
  }),
};

export const AccordionCyan: Story = {
  render: () => ({
    template: `
    <vk-accordion title="Accordion 1" color="cyan">
    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quia sit
    dignissimos sapiente dolore commodi, adipisci quae ipsum saepe ab. Iure
    saepe libero sequi earum ratione possimus voluptas, minus dicta.
  </p>
    </vk-accordion>`,
  }),
};

export const AccordionLime: Story = {
  render: () => ({
    template: `
    <vk-accordion title="Accordion 1" color="lime">
    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quia sit
    dignissimos sapiente dolore commodi, adipisci quae ipsum saepe ab. Iure
    saepe libero sequi earum ratione possimus voluptas, minus dicta.
  </p>
    </vk-accordion>`,
  }),
};

export const AccordionViolet: Story = {
  render: () => ({
    template: `
    <vk-accordion title="Accordion 1" color="violet">
    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quia sit
    dignissimos sapiente dolore commodi, adipisci quae ipsum saepe ab. Iure
    saepe libero sequi earum ratione possimus voluptas, minus dicta.
  </p>
    </vk-accordion>`,
  }),
};

export const AccordionPurple: Story = {
  render: () => ({
    template: `
    <vk-accordion title="Accordion 1" color="purple">
    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quia sit
    dignissimos sapiente dolore commodi, adipisci quae ipsum saepe ab. Iure
    saepe libero sequi earum ratione possimus voluptas, minus dicta.
  </p>
    </vk-accordion>`,
  }),
};

export const AccordionSky: Story = {
  render: () => ({
    template: `
    <vk-accordion title="Accordion 1" color="sky">
    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quia sit
    dignissimos sapiente dolore commodi, adipisci quae ipsum saepe ab. Iure
    saepe libero sequi earum ratione possimus voluptas, minus dicta.
  </p>
    </vk-accordion>`,
  }),
};
