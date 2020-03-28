import { addParameters } from '@storybook/react'; // <- or your storybook framework

addParameters({
  backgrounds: [
    { name: 'default', value: '#F2F2F4', default: true }, // デフォルトの色にdefault:trueを絵ッてい
    { name: 'white', value: '#FFFFFF' },
    { name: 'black', value: '#161722' },
  ],
});
