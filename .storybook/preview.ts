import type { Preview } from "@storybook/react";
import '../packages/styles/index.css'; // we'll create this next
// import 'tailwindcss/tailwind.css'

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
