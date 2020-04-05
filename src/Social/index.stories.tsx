import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Chrome from './Chrome';
import Compass from './Compass';
import Eth from './Eth';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Slack from './Slack';
import Twitter from './Twitter';

storiesOf('components | Social', module)
  .addDecorator((story) => <div style={{ color: '#FFFFFF' }}>{story()}</div>)
  .add('Chrome', () => (
    <div>
      <h3>Chrome</h3>
      <Chrome />
      <h2>small</h2>
      <Chrome fontSize="small" />
      <h2>large</h2>
      <Chrome fontSize="large" />
    </div>
  ))
  .add('Compass', () => (
    <div>
      <h3>Compass</h3>
      <Compass />
      <h2>small</h2>
      <Compass fontSize="small" />
      <h2>large</h2>
      <Compass fontSize="large" />
    </div>
  ))
  .add('Eth', () => (
    <div>
      <h3>Eth</h3>
      <Eth />
      <h2>small</h2>
      <Eth fontSize="small" />
      <h2>large</h2>
      <Eth fontSize="large" />
    </div>
  ))
  .add('Facebook', () => (
    <div>
      <h3>Facebook</h3>
      <Facebook />
      <h2>small</h2>
      <Facebook fontSize="small" />
      <h2>large</h2>
      <Facebook fontSize="large" />
    </div>
  ))
  .add('Instagram', () => (
    <div>
      <h3>Instagram</h3>
      <Instagram />
      <h2>small</h2>
      <Instagram fontSize="small" />
      <h2>large</h2>
      <Instagram fontSize="large" />
    </div>
  ))
  .add('Slack', () => (
    <div>
      <h3>Slack</h3>
      <Slack />
      <h2>small</h2>
      <Slack fontSize="small" />
      <h2>large</h2>
      <Slack fontSize="large" />
    </div>
  ))
  .add('Twitter', () => (
    <div>
      <h3>Twitter</h3>
      <Twitter />
      <h2>small</h2>
      <Twitter fontSize="small" />
      <h2>large</h2>
      <Twitter fontSize="large" />
    </div>
  ));
