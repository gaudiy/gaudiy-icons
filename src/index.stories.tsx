import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Home from './Basic/Home';

storiesOf('components | Usecases', module)
  .addDecorator((story) => <div style={{ color: '#FFFFFF' }}>{story()}</div>)
  .add('Colors', () => (
    <div>
      <h3>Primary</h3>
      <Home color="primary" />
      <h2>Secondary</h2>
      <Home color="secondary" />
      <h2>Success</h2>
      <Home color="success" />
      <h2>Disabled</h2>
      <Home color="disabled" />
      <h2>Error</h2>
      <Home color="error" />
      <h2>Inherit</h2>
      <Home color="inherit" />
    </div>
  ))
  .add('StrokeWidth', () => (
    <div>
      <h3>Thin</h3>
      <Home color="inherit" style={{ strokeWidth: 1 }} />
      <h2>Default</h2>
      <Home color="inherit" />
      <h2>Thick</h2>
      <Home color="inherit" style={{ strokeWidth: 2 }} />
      <h2>Thick x2</h2>
      <Home color="inherit" style={{ strokeWidth: 3 }} />
    </div>
  ));
