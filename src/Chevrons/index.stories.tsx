import { storiesOf } from '@storybook/react';
import * as React from 'react';
import ChevronDown from './ChevronDown';
import ChevronLeft from './ChevronLeft';
import ChevronRight from './ChevronRight';
import ChevronsDown from './ChevronsDown';
import ChevronsLeft from './ChevronsLeft';
import ChevronsRight from './ChevronsRight';
import ChevronsUp from './ChevronsUp';
import ChevronUp from './ChevronUp';

storiesOf('components | Chevrons', module)
  .addDecorator((story) => <div style={{ color: '#FFFFFF' }}>{story()}</div>)
  .add('ChevronDown', () => (
    <div>
      <h3>ChevronDown</h3>
      <ChevronDown />
      <h2>small</h2>
      <ChevronDown fontSize="small" />
      <h2>large</h2>
      <ChevronDown fontSize="large" />
    </div>
  ))
  .add('ChevronLeft', () => (
    <div>
      <h3>ChevronLeft</h3>
      <ChevronLeft />
      <h2>small</h2>
      <ChevronLeft fontSize="small" />
      <h2>large</h2>
      <ChevronLeft fontSize="large" />
    </div>
  ))
  .add('ChevronRight', () => (
    <div>
      <h3>ChevronRight</h3>
      <ChevronRight />
      <h2>small</h2>
      <ChevronRight fontSize="small" />
      <h2>large</h2>
      <ChevronRight fontSize="large" />
    </div>
  ))
  .add('ChevronUp', () => (
    <div>
      <h3>ChevronUp</h3>
      <ChevronUp />
      <h2>small</h2>
      <ChevronUp fontSize="small" />
      <h2>large</h2>
      <ChevronUp fontSize="large" />
    </div>
  ))
  .add('ChevronsDown', () => (
    <div>
      <h3>ChevronsDown</h3>
      <ChevronsDown />
      <h2>small</h2>
      <ChevronsDown fontSize="small" />
      <h2>large</h2>
      <ChevronsDown fontSize="large" />
    </div>
  ))
  .add('ChevronsLeft', () => (
    <div>
      <h3>ChevronsLeft</h3>
      <ChevronsLeft />
      <h2>small</h2>
      <ChevronsLeft fontSize="small" />
      <h2>large</h2>
      <ChevronsLeft fontSize="large" />
    </div>
  ))
  .add('ChevronsRight', () => (
    <div>
      <h3>ChevronsRight</h3>
      <ChevronsRight />
      <h2>small</h2>
      <ChevronsRight fontSize="small" />
      <h2>large</h2>
      <ChevronsRight fontSize="large" />
    </div>
  ))
  .add('ChevronsUp', () => (
    <div>
      <h3>ChevronsUp</h3>
      <ChevronsUp />
      <h2>small</h2>
      <ChevronsUp fontSize="small" />
      <h2>large</h2>
      <ChevronsUp fontSize="large" />
    </div>
  ));
