import { storiesOf } from '@storybook/react';
import * as React from 'react';
import AlignCenter from './AlignCenter';
import AlignLeft from './AlignLeft';
import Bold from './Bold';
import Clipboard from './Clipboard';
import Color from './Color';
import DollarSign from './DollarSign';
import Edit2 from './Edit2';
import FileMinus from './FileMinus';
import FilePlus from './FilePlus';
import FolderPlus from './FolderPlus';
import Inbox from './Inbox';
import KeyboardClose from './KeyboardClose';
import List from './List';
import Quote from './Quote';
import Type from './Type';

storiesOf('components | Text', module)
  .addDecorator((story) => <div style={{ color: '#FFFFFF' }}>{story()}</div>)
  .add('Type', () => (
    <div>
      <h3>Type</h3>
      <Type />
      <h2>small</h2>
      <Type fontSize="small" />
      <h2>large</h2>
      <Type fontSize="large" />
    </div>
  ))
  .add('Bold', () => (
    <div>
      <h3>Bold</h3>
      <Bold />
      <h2>small</h2>
      <Bold fontSize="small" />
      <h2>large</h2>
      <Bold fontSize="large" />
    </div>
  ))
  .add('KeyboardClose', () => (
    <div>
      <h3>KeyboardClose</h3>
      <KeyboardClose />
      <h2>small</h2>
      <KeyboardClose fontSize="small" />
      <h2>large</h2>
      <KeyboardClose fontSize="large" />
    </div>
  ))
  .add('AlignLeft', () => (
    <div>
      <h3>AlignLeft</h3>
      <AlignLeft />
      <h2>small</h2>
      <AlignLeft fontSize="small" />
      <h2>large</h2>
      <AlignLeft fontSize="large" />
    </div>
  ))
  .add('AlignCenter', () => (
    <div>
      <h3>AlignCenter</h3>
      <AlignCenter />
      <h2>small</h2>
      <AlignCenter fontSize="small" />
      <h2>large</h2>
      <AlignCenter fontSize="large" />
    </div>
  ))
  .add('Quote', () => (
    <div>
      <h3>Quote</h3>
      <Quote />
      <h2>small</h2>
      <Quote fontSize="small" />
      <h2>large</h2>
      <Quote fontSize="large" />
    </div>
  ))
  .add('Color', () => (
    <div>
      <h3>Color</h3>
      <Color />
      <h2>small</h2>
      <Color fontSize="small" />
      <h2>large</h2>
      <Color fontSize="large" />
    </div>
  ))
  .add('DollarSign', () => (
    <div>
      <h3>DollarSign</h3>
      <DollarSign />
      <h2>small</h2>
      <DollarSign fontSize="small" />
      <h2>large</h2>
      <DollarSign fontSize="large" />
    </div>
  ))
  .add('Edit2', () => (
    <div>
      <h3>Edit2</h3>
      <Edit2 />
      <h2>small</h2>
      <Edit2 fontSize="small" />
      <h2>large</h2>
      <Edit2 fontSize="large" />
    </div>
  ))
  .add('Clipboard', () => (
    <div>
      <h3>Clipboard</h3>
      <Clipboard />
      <h2>small</h2>
      <Clipboard fontSize="small" />
      <h2>large</h2>
      <Clipboard fontSize="large" />
    </div>
  ))
  .add('Inbox', () => (
    <div>
      <h3>Inbox</h3>
      <Inbox />
      <h2>small</h2>
      <Inbox fontSize="small" />
      <h2>large</h2>
      <Inbox fontSize="large" />
    </div>
  ))
  .add('FileMinus', () => (
    <div>
      <h3>FileMinus</h3>
      <FileMinus />
      <h2>small</h2>
      <FileMinus fontSize="small" />
      <h2>large</h2>
      <FileMinus fontSize="large" />
    </div>
  ))
  .add('FilePlus', () => (
    <div>
      <h3>FilePlus</h3>
      <FilePlus />
      <h2>small</h2>
      <FilePlus fontSize="small" />
      <h2>large</h2>
      <FilePlus fontSize="large" />
    </div>
  ))
  .add('List', () => (
    <div>
      <h3>List</h3>
      <List />
      <h2>small</h2>
      <List fontSize="small" />
      <h2>large</h2>
      <List fontSize="large" />
    </div>
  ))
  .add('FolderPlus', () => (
    <div>
      <h3>FolderPlus</h3>
      <FolderPlus />
      <h2>small</h2>
      <FolderPlus fontSize="small" />
      <h2>large</h2>
      <FolderPlus fontSize="large" />
    </div>
  ));
