import { storiesOf } from '@storybook/react';
import * as React from 'react';
import ArrowDown from './ArrowDown';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import ArrowUp from './ArrowUp';
import CornerDownLeft from './CornerDownLeft';
import CornerDownRight from './CornerDownRight';
import CornerLeftDown from './CornerLeftDown';
import CornerLeftUp from './CornerLeftUp';
import CornerRightDown from './CornerRightDown';
import CornerRightUp from './CornerRightUp';
import CornerUpLeft from './CornerUpLeft';
import CornerUpRight from './CornerUpRight';
import Maximize2 from './Maximize2';
import Minimize2 from './Minimize2';
import RefreshCW from './RefreshCW';
import Repeat from './Repeat';
import RotateCCW from './RotateCCW';
import RotateCW from './RotateCW';
import TrendingDown from './TrendingDown';
import TrendingUp from './TrendingUp';

storiesOf('components | Arrows', module)
  .addDecorator((story) => <div style={{ color: '#FFFFFF' }}>{story()}</div>)
  .add('ArrowDown', () => (
    <div>
      <h3>ArrowDown</h3>
      <ArrowDown />
      <h2>small</h2>
      <ArrowDown fontSize="small" />
      <h2>large</h2>
      <ArrowDown fontSize="large" />
    </div>
  ))
  .add('ArrowLeft', () => (
    <div>
      <h3>ArrowLeft</h3>
      <ArrowLeft />
      <h2>small</h2>
      <ArrowLeft fontSize="small" />
      <h2>large</h2>
      <ArrowLeft fontSize="large" />
    </div>
  ))
  .add('ArrowRight', () => (
    <div>
      <h3>ArrowRight</h3>
      <ArrowRight />
      <h2>small</h2>
      <ArrowRight fontSize="small" />
      <h2>large</h2>
      <ArrowRight fontSize="large" />
    </div>
  ))
  .add('ArrowUp', () => (
    <div>
      <h3>ArrowUp</h3>
      <ArrowUp />
      <h2>small</h2>
      <ArrowUp fontSize="small" />
      <h2>large</h2>
      <ArrowUp fontSize="large" />
    </div>
  ))
  .add('TrendingDown', () => (
    <div>
      <h3>TrendingDown</h3>
      <TrendingDown />
      <h2>small</h2>
      <TrendingDown fontSize="small" />
      <h2>large</h2>
      <TrendingDown fontSize="large" />
    </div>
  ))
  .add('TrendingUp', () => (
    <div>
      <h3>TrendingUp</h3>
      <TrendingUp />
      <h2>small</h2>
      <TrendingUp fontSize="small" />
      <h2>large</h2>
      <TrendingUp fontSize="large" />
    </div>
  ))
  .add('CornerDownLeft', () => (
    <div>
      <h3>CornerDownLeft</h3>
      <CornerDownLeft />
      <h2>small</h2>
      <CornerDownLeft fontSize="small" />
      <h2>large</h2>
      <CornerDownLeft fontSize="large" />
    </div>
  ))
  .add('CornerDownRight', () => (
    <div>
      <h3>CornerDownRight</h3>
      <CornerDownRight />
      <h2>small</h2>
      <CornerDownRight fontSize="small" />
      <h2>large</h2>
      <CornerDownRight fontSize="large" />
    </div>
  ))
  .add('CornerLeftDown', () => (
    <div>
      <h3>CornerLeftDown</h3>
      <CornerLeftDown />
      <h2>small</h2>
      <CornerLeftDown fontSize="small" />
      <h2>large</h2>
      <CornerLeftDown fontSize="large" />
    </div>
  ))
  .add('CornerRightDown', () => (
    <div>
      <h3>CornerRightDown</h3>
      <CornerRightDown />
      <h2>small</h2>
      <CornerRightDown fontSize="small" />
      <h2>large</h2>
      <CornerRightDown fontSize="large" />
    </div>
  ))
  .add('CornerRightUp', () => (
    <div>
      <h3>CornerRightUp</h3>
      <CornerRightUp />
      <h2>small</h2>
      <CornerRightUp fontSize="small" />
      <h2>large</h2>
      <CornerRightUp fontSize="large" />
    </div>
  ))

  .add('CornerUpLeft', () => (
    <div>
      <h3>CornerUpLeft</h3>
      <CornerUpLeft />
      <h2>small</h2>
      <CornerUpLeft fontSize="small" />
      <h2>large</h2>
      <CornerUpLeft fontSize="large" />
    </div>
  ))

  .add('RotateCCW', () => (
    <div>
      <h3>RotateCCW</h3>
      <RotateCCW />
      <h2>small</h2>
      <RotateCCW fontSize="small" />
      <h2>large</h2>
      <RotateCCW fontSize="large" />
    </div>
  ))
  .add('RotateCW', () => (
    <div>
      <h3>RotateCW</h3>
      <RotateCW />
      <h2>small</h2>
      <RotateCW fontSize="small" />
      <h2>large</h2>
      <RotateCW fontSize="large" />
    </div>
  ))
  .add('Repeat', () => (
    <div>
      <h3>Repeat</h3>
      <Repeat />
      <h2>small</h2>
      <Repeat fontSize="small" />
      <h2>large</h2>
      <Repeat fontSize="large" />
    </div>
  ))
  .add('RefreshCW', () => (
    <div>
      <h3>Paperclip</h3>
      <RefreshCW />
      <h2>small</h2>
      <RefreshCW fontSize="small" />
      <h2>large</h2>
      <RefreshCW fontSize="large" />
    </div>
  ))
  .add('Minimize2', () => (
    <div>
      <h3>Phone</h3>
      <Minimize2 />
      <h2>small</h2>
      <Minimize2 fontSize="small" />
      <h2>large</h2>
      <Minimize2 fontSize="large" />
    </div>
  ))
  .add('Maximize2', () => (
    <div>
      <h3>Maximize2</h3>
      <Maximize2 />
      <h2>small</h2>
      <Maximize2 fontSize="small" />
      <h2>large</h2>
      <Maximize2 fontSize="large" />
    </div>
  ))
  .add('CornerLeftUp', () => (
    <div>
      <h3>CornerLeftUp</h3>
      <CornerLeftUp />
      <h2>small</h2>
      <CornerLeftUp fontSize="small" />
      <h2>large</h2>
      <CornerLeftUp fontSize="large" />
    </div>
  ))
  .add('CornerUpRight', () => (
    <div>
      <h3>CornerUpRight</h3>
      <CornerUpRight />
      <h2>small</h2>
      <CornerUpRight fontSize="small" />
      <h2>large</h2>
      <CornerUpRight fontSize="large" />
    </div>
  ));
