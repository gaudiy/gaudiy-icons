import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Home from './Home';

storiesOf('components | Basic', module)
  .addDecorator(story => (
    <div style={{ color: '#FFFFFF' }}>
    {story()}
    </div>
  ))
  .add(
    'Home',
    () => (
      <div >
        <h3>Home</h3>
        <Home />
        <h2>small</h2>
        <Home fontSize='small' />
        <h2>large</h2>
        <Home fontSize='large' />
      </div>
    ),
  )
