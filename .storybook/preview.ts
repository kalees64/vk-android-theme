import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Preview, StoryFn, StoryContext } from '@storybook/angular';

const icons = new FaIconLibrary();
icons.addIcons(faCoffee);

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href =
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
document.head.appendChild(link);

export const decorators = [
  (Story: StoryFn, context: StoryContext) => {
    return Story(context.args, context);
  },
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
