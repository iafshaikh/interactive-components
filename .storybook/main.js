// .storybook/main.js

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-controls'
  ],
  staticDirs: ['../src/assets'],
};
