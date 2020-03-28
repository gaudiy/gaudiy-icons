import { addParameters } from '@storybook/react';

addParameters({
  backgrounds: [
    { name: 'default', value: 'rgb(112,112,116)', default: true }, // デフォルトの色にdefault:true
    { name: 'white', value: '#FFFFFF' },
    { name: 'black', value: '#161722' },
  ],
});
