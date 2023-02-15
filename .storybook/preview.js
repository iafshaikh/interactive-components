import { addParameters } from '@storybook/web-components';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}



addParameters({
  docs: {
    inlineStories: true,
  },
  globalStyles: `

  @font-face {
    font-family: 'proxima-nova';
    src: url('./fonts/proximanova-regular.woff2?v=00000000') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'proxima-nova';
    src: url('./fonts/proximanova-regular.woff2?v=00000000') format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: block;
  }
    body {
      font-family: 'proxima-nova', Arial, sans-serif;
    }
  `,
});