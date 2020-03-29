import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Monitor from './Monitor';
import PauseCircle from './PauseCircle';
import Play from './Play';
import PlayCircle from './PlayCircle';
import Power from './Power';
import SmartPhone from './SmartPhone';
import Tablet from './Tablet';
import Tv from './Tv';
import Volume from './Volume';
import Volume1 from './Volume1';
import Volume2 from './Volume2';
import VolumeX from './VolumeX';

storiesOf('components | Device', module)
  .addDecorator((story) => <div style={{ color: '#FFFFFF' }}>{story()}</div>)
  .add('SmartPhone', () => (
    <div>
      <h3>SmartPhone</h3>
      <SmartPhone />
      <h2>small</h2>
      <SmartPhone fontSize="small" />
      <h2>large</h2>
      <SmartPhone fontSize="large" />
    </div>
  ))
  .add('Tv', () => (
    <div>
      <h3>Tv</h3>
      <Tv />
      <h2>small</h2>
      <Tv fontSize="small" />
      <h2>large</h2>
      <Tv fontSize="large" />
    </div>
  ))
  .add('Tablet', () => (
    <div>
      <h3>Tablet</h3>
      <Tablet />
      <h2>small</h2>
      <Tablet fontSize="small" />
      <h2>large</h2>
      <Tablet fontSize="large" />
    </div>
  ))
  .add('Monitor', () => (
    <div>
      <h3>Monitor</h3>
      <Monitor />
      <h2>small</h2>
      <Monitor fontSize="small" />
      <h2>large</h2>
      <Monitor fontSize="large" />
    </div>
  ))
  .add('Power', () => (
    <div>
      <h3>Power</h3>
      <Power />
      <h2>small</h2>
      <Power fontSize="small" />
      <h2>large</h2>
      <Power fontSize="large" />
    </div>
  ))
  .add('PlayCircle', () => (
    <div>
      <h3>PlayCircle</h3>
      <PlayCircle />
      <h2>small</h2>
      <PlayCircle fontSize="small" />
      <h2>large</h2>
      <PlayCircle fontSize="large" />
    </div>
  ))
  .add('Volume1', () => (
    <div>
      <h3>Volume1</h3>
      <Volume1 />
      <h2>small</h2>
      <Volume1 fontSize="small" />
      <h2>large</h2>
      <Volume1 fontSize="large" />
    </div>
  ))
  .add('Volume2', () => (
    <div>
      <h3>Volume2</h3>
      <Volume2 />
      <h2>small</h2>
      <Volume2 fontSize="small" />
      <h2>large</h2>
      <Volume2 fontSize="large" />
    </div>
  ))
  .add('VolumeX', () => (
    <div>
      <h3>VolumeX</h3>
      <VolumeX />
      <h2>small</h2>
      <VolumeX fontSize="small" />
      <h2>large</h2>
      <VolumeX fontSize="large" />
    </div>
  ))
  .add('Volume', () => (
    <div>
      <h3>Volume</h3>
      <Volume />
      <h2>small</h2>
      <Volume fontSize="small" />
      <h2>large</h2>
      <Volume fontSize="large" />
    </div>
  ))
  .add('PauseCircle', () => (
    <div>
      <h3>PauseCircle</h3>
      <PauseCircle />
      <h2>small</h2>
      <PauseCircle fontSize="small" />
      <h2>large</h2>
      <PauseCircle fontSize="large" />
    </div>
  ))
  .add('Play', () => (
    <div>
      <h3>Play</h3>
      <Play />
      <h2>small</h2>
      <Play fontSize="small" />
      <h2>large</h2>
      <Play fontSize="large" />
    </div>
  ));
