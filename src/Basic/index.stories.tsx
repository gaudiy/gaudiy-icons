import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Home from './Home';

storiesOf('components | Basic', module)
  .add(
    'Home',
    () => (
      <div>
        <h3>Home</h3>
        <Home />
      </div>
    ),
  )
