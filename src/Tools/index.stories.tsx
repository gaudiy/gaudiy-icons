import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Book from './Book';
import BookOpen from './BookOpen';
import Briefcase from './Briefcase';
import Feather from './Feather';
import Grid from './Grid';
import Hammer from './Hammer';
import Layout from './Layout';
import Lock from './Lock';
import Map from './Map';
import MinusCircle from './MinusCircle';
import MinusSquare from './MinusSquare';
import Navigation from './Navigation';
import Navigation2 from './Navigation2';
import Paperclip from './Paperclip';
import Phone from './Phone';
import PlusCircle from './PlusCircle';
import Painting from './Painting';
import Scissors from './Scissors';
import Sidebar from './Sidebar';
import ToggleLeft from './ToggleLeft';
import ToggleRight from './ToggleRight';
import Tool from './Tool';
import Unlock from './Unlock';
import XCircle from './XCircle';
import ZoomIn from './ZoomIn';
import ZoomOut from './ZoomOut';

storiesOf('components | Tools', module)
  .addDecorator((story) => <div style={{ color: '#FFFFFF' }}>{story()}</div>)
  .add('ZoomOut', () => (
    <div>
      <h3>ZoomOut</h3>
      <ZoomOut />
      <h2>small</h2>
      <ZoomOut fontSize="small" />
      <h2>large</h2>
      <ZoomOut fontSize="large" />
    </div>
  ))
  .add('ZoomIn', () => (
    <div>
      <h3>ZoomIn</h3>
      <ZoomIn />
      <h2>small</h2>
      <ZoomIn fontSize="small" />
      <h2>large</h2>
      <ZoomIn fontSize="large" />
    </div>
  ))
  .add('Hammer', () => (
    <div>
      <h3>Hammer</h3>
      <Hammer />
      <h2>small</h2>
      <Hammer fontSize="small" />
      <h2>large</h2>
      <Hammer fontSize="large" />
    </div>
  ))
  .add('Map', () => (
    <div>
      <h3>Map</h3>
      <Map />
      <h2>small</h2>
      <Map fontSize="small" />
      <h2>large</h2>
      <Map fontSize="large" />
    </div>
  ))
  .add('Navigation2', () => (
    <div>
      <h3>Navigation2</h3>
      <Navigation2 />
      <h2>small</h2>
      <Navigation2 fontSize="small" />
      <h2>large</h2>
      <Navigation2 fontSize="large" />
    </div>
  ))
  .add('Navigation', () => (
    <div>
      <h3>Navigation</h3>
      <Navigation />
      <h2>small</h2>
      <Navigation fontSize="small" />
      <h2>large</h2>
      <Navigation fontSize="large" />
    </div>
  ))
  .add('Briefcase', () => (
    <div>
      <h3>Briefcase</h3>
      <Briefcase />
      <h2>small</h2>
      <Briefcase fontSize="small" />
      <h2>large</h2>
      <Briefcase fontSize="large" />
    </div>
  ))
  .add('ToggleRight', () => (
    <div>
      <h3>ToggleRight</h3>
      <ToggleRight />
      <h2>small</h2>
      <ToggleRight fontSize="small" />
      <h2>large</h2>
      <ToggleRight fontSize="large" />
    </div>
  ))
  .add('ToggleLeft', () => (
    <div>
      <h3>ToggleLeft</h3>
      <ToggleLeft />
      <h2>small</h2>
      <ToggleLeft fontSize="small" />
      <h2>large</h2>
      <ToggleLeft fontSize="large" />
    </div>
  ))
  .add('Unlock', () => (
    <div>
      <h3>Unlock</h3>
      <Unlock />
      <h2>small</h2>
      <Unlock fontSize="small" />
      <h2>large</h2>
      <Unlock fontSize="large" />
    </div>
  ))
  .add('Tool', () => (
    <div>
      <h3>Tool</h3>
      <Tool />
      <h2>small</h2>
      <Tool fontSize="small" />
      <h2>large</h2>
      <Tool fontSize="large" />
    </div>
  ))

  .add('Scissors', () => (
    <div>
      <h3>Scissors</h3>
      <Scissors />
      <h2>small</h2>
      <Scissors fontSize="small" />
      <h2>large</h2>
      <Scissors fontSize="large" />
    </div>
  ))

  .add('Grid', () => (
    <div>
      <h3>Grid</h3>
      <Grid />
      <h2>small</h2>
      <Grid fontSize="small" />
      <h2>large</h2>
      <Grid fontSize="large" />
    </div>
  ))
  .add('Layout', () => (
    <div>
      <h3>Layout</h3>
      <Layout />
      <h2>small</h2>
      <Layout fontSize="small" />
      <h2>large</h2>
      <Layout fontSize="large" />
    </div>
  ))
  .add('Sidebar', () => (
    <div>
      <h3>Layout</h3>
      <Sidebar />
      <h2>small</h2>
      <Sidebar fontSize="small" />
      <h2>large</h2>
      <Sidebar fontSize="large" />
    </div>
  ))
  .add('Paperclip', () => (
    <div>
      <h3>Paperclip</h3>
      <Paperclip />
      <h2>small</h2>
      <Paperclip fontSize="small" />
      <h2>large</h2>
      <Paperclip fontSize="large" />
    </div>
  ))
  .add('Painting', () => (
    <div>
      <h3>Painting</h3>
      <Painting />
      <h2>small</h2>
      <Painting fontSize="small" />
      <h2>large</h2>
      <Painting fontSize="large" />
    </div>
  ))
  .add('Phone', () => (
    <div>
      <h3>Phone</h3>
      <Phone />
      <h2>small</h2>
      <Phone fontSize="small" />
      <h2>large</h2>
      <Phone fontSize="large" />
    </div>
  ))
  .add('Feather', () => (
    <div>
      <h3>Feather</h3>
      <Feather />
      <h2>small</h2>
      <Feather fontSize="small" />
      <h2>large</h2>
      <Feather fontSize="large" />
    </div>
  ))
  .add('Book', () => (
    <div>
      <h3>Book</h3>
      <Book />
      <h2>small</h2>
      <Book fontSize="small" />
      <h2>large</h2>
      <Book fontSize="large" />
    </div>
  ))
  .add('BookOpen', () => (
    <div>
      <h3>Book</h3>
      <BookOpen />
      <h2>small</h2>
      <BookOpen fontSize="small" />
      <h2>large</h2>
      <BookOpen fontSize="large" />
    </div>
  ))
  .add('Lock', () => (
    <div>
      <h3>Lock</h3>
      <Lock />
      <h2>small</h2>
      <Lock fontSize="small" />
      <h2>large</h2>
      <Lock fontSize="large" />
    </div>
  ))
  .add('PlusCircle', () => (
    <div>
      <h3>PlusCircle</h3>
      <PlusCircle />
      <h2>small</h2>
      <PlusCircle fontSize="small" />
      <h2>large</h2>
      <PlusCircle fontSize="large" />
    </div>
  ))
  .add('XCircle', () => (
    <div>
      <h3>XCircle</h3>
      <XCircle />
      <h2>small</h2>
      <XCircle fontSize="small" />
      <h2>large</h2>
      <XCircle fontSize="large" />
    </div>
  ))
  .add('MinusCircle', () => (
    <div>
      <h3>MinusCircle</h3>
      <MinusCircle />
      <h2>small</h2>
      <MinusCircle fontSize="small" />
      <h2>large</h2>
      <MinusCircle fontSize="large" />
    </div>
  ))
  .add('MinusSquare', () => (
    <div>
      <h3>MinusSquare</h3>
      <MinusSquare />
      <h2>small</h2>
      <MinusSquare fontSize="small" />
      <h2>large</h2>
      <MinusSquare fontSize="large" />
    </div>
  ));
