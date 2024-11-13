import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { VkModalComponent } from './vk-modal.component';
import { VkModalTitleComponent } from '../vk-modal-title/vk-modal-title.component';
import { VkModalBodyComponent } from '../vk-modal-body/vk-modal-body.component';
import { VkModalFooterComponent } from '../vk-modal-footer/vk-modal-footer.component';
import { VkButtonComponent } from 'theme';
import { VkModalButtonsComponent } from '../vk-modal-buttons/vk-modal-buttons.component';

const meta: Meta = {
  title: 'Modal',
  component: VkModalComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        VkModalComponent,
        VkModalTitleComponent,
        VkModalBodyComponent,
        VkModalFooterComponent,
        VkModalButtonsComponent,
        VkButtonComponent,
      ],
    }),
  ],
};

export default meta;

type Story = StoryObj<VkModalComponent>;

export const Modal: Story = {
  render: () => ({
    template: `<vk-modal>
    <vk-modal-title title>Modal Title</vk-modal-title>
    <vk-modal-body body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod
        veniam blanditiis iusto? Tempore assumenda reprehenderit in placeat
        perspiciatis, eveniet itaque architecto alias animi veritatis, at atque
        eligendi nemo cupiditate earum libero fuga soluta debitis et fugit
        distinctio cumque accusantium culpa? Cupiditate totam quasi itaque
        repellendus aliquid fugiat inventore a reiciendis consequuntur eaque
        earum aspernatur accusamus temporibus, laborum molestias at doloribus
        omnis recusandae suscipit facilis non voluptatum. Id sequi consectetur
        eum labore optio omnis aspernatur! Porro obcaecati suscipit explicabo,
        voluptate rerum, quisquam delectus totam quibusdam repudiandae
        asperiores beatae laborum aperiam maiores eaque ipsa incidunt eum hic
        facere aspernatur vel. Laboriosam?</vk-modal-body>
    </vk-modal>`,
  }),
};

export const ModalCenter: Story = {
  render: () => ({
    template: `<vk-modal position="center">
    <vk-modal-title title>Modal Title</vk-modal-title>
    <vk-modal-body body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod
        veniam blanditiis iusto? Tempore assumenda reprehenderit in placeat
        perspiciatis, eveniet itaque architecto alias animi veritatis, at atque
        eligendi nemo cupiditate earum libero fuga soluta debitis et fugit
        distinctio cumque accusantium culpa? Cupiditate totam quasi itaque
        repellendus aliquid fugiat inventore a reiciendis consequuntur eaque
        earum aspernatur accusamus temporibus, laborum molestias at doloribus
        omnis recusandae suscipit facilis non voluptatum. Id sequi consectetur
        eum labore optio omnis aspernatur! Porro obcaecati suscipit explicabo,
        voluptate rerum, quisquam delectus totam quibusdam repudiandae
        asperiores beatae laborum aperiam maiores eaque ipsa incidunt eum hic
        facere aspernatur vel. Laboriosam?</vk-modal-body>
    </vk-modal>`,
  }),
};

export const ModalWithFooter: Story = {
  render: () => ({
    template: `<vk-modal position="top">
    <vk-modal-title title>Modal Title</vk-modal-title>
    <vk-modal-body body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod
        veniam blanditiis iusto? Tempore assumenda reprehenderit in placeat
        perspiciatis, eveniet itaque architecto alias animi veritatis, at atque
        eligendi nemo cupiditate earum libero fuga soluta debitis et fugit
        distinctio cumque accusantium culpa? Cupiditate totam quasi itaque
        repellendus aliquid fugiat inventore a reiciendis consequuntur eaque
        earum aspernatur accusamus temporibus, laborum molestias at doloribus
        omnis recusandae suscipit facilis non voluptatum. Id sequi consectetur
        eum labore optio omnis aspernatur! Porro obcaecati suscipit explicabo,
        voluptate rerum, quisquam delectus totam quibusdam repudiandae
        asperiores beatae laborum aperiam maiores eaque ipsa incidunt eum hic
        facere aspernatur vel. Laboriosam?</vk-modal-body>

        <vk-modal-footer footer>Modal Footer Content</vk-modal-footer>
    </vk-modal>`,
  }),
};

export const ModalWithMoreButtons: Story = {
  render: () => ({
    template: `<vk-modal position="top">
    <vk-modal-title title>Modal Title</vk-modal-title>
    <vk-modal-body body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod
        veniam blanditiis iusto? Tempore assumenda reprehenderit in placeat
        perspiciatis, eveniet itaque architecto alias animi veritatis, at atque
        eligendi nemo cupiditate earum libero fuga soluta debitis et fugit
        distinctio cumque accusantium culpa? Cupiditate totam quasi itaque
        repellendus aliquid fugiat inventore a reiciendis consequuntur eaque
        earum aspernatur accusamus temporibus, laborum molestias at doloribus
        omnis recusandae suscipit facilis non voluptatum. Id sequi consectetur
        eum labore optio omnis aspernatur! Porro obcaecati suscipit explicabo,
        voluptate rerum, quisquam delectus totam quibusdam repudiandae
        asperiores beatae laborum aperiam maiores eaque ipsa incidunt eum hic
        facere aspernatur vel. Laboriosam?</vk-modal-body>

        <vk-modal-buttons buttons>
        <vk-button color="blue">Button 1</vk-button>
        <vk-button color="green">Button 2</vk-button>
        </vk-modal-buttons>

    </vk-modal>`,
  }),
};
