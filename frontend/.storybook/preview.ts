import type { Preview } from '@storybook/react-webpack5'
import "../src/styles/searchList.scss"
import '../src/styles/app.scss'

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