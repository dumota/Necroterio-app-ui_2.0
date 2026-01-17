import type { Preview } from '@storybook/nextjs-vite'
import '../app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#0a0a0a',
        },
      ],
      disable: false,
    },
  },
  decorators: [
    (Story) => {
      // Aplica a classe 'dark' ao body para ativar o tema dark do Tailwind
      if (typeof document !== 'undefined') {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
      }
      return Story();
    },
  ],
};

export default preview;