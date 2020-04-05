import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Cloud from './Cloud';
import DownloadCloud from './DownloadCloud';
import File from './File';
import FileText from './FileText';
import Folder from './Folder';
import Save from './Save';
import UploadCloud from './UploadCloud';

storiesOf('components | File', module)
  .addDecorator((story) => <div style={{ color: '#FFFFFF' }}>{story()}</div>)
  .add('Cloud', () => (
    <div>
      <h3>Cloud</h3>
      <Cloud />
      <h2>small</h2>
      <Cloud fontSize="small" />
      <h2>large</h2>
      <Cloud fontSize="large" />
    </div>
  ))
  .add('DownloadCloud', () => (
    <div>
      <h3>DownloadCloud</h3>
      <DownloadCloud />
      <h2>small</h2>
      <DownloadCloud fontSize="small" />
      <h2>large</h2>
      <DownloadCloud fontSize="large" />
    </div>
  ))
  .add('File', () => (
    <div>
      <h3>File</h3>
      <File />
      <h2>small</h2>
      <File fontSize="small" />
      <h2>large</h2>
      <File fontSize="large" />
    </div>
  ))
  .add('FileText', () => (
    <div>
      <h3>FileText</h3>
      <FileText />
      <h2>small</h2>
      <FileText fontSize="small" />
      <h2>large</h2>
      <FileText fontSize="large" />
    </div>
  ))
  .add('Folder', () => (
    <div>
      <h3>Folder</h3>
      <Folder />
      <h2>small</h2>
      <Folder fontSize="small" />
      <h2>large</h2>
      <Folder fontSize="large" />
    </div>
  ))
  .add('Save', () => (
    <div>
      <h3>Save</h3>
      <Save />
      <h2>small</h2>
      <Save fontSize="small" />
      <h2>large</h2>
      <Save fontSize="large" />
    </div>
  ))
  .add('UploadCloud', () => (
    <div>
      <h3>UploadCloud</h3>
      <UploadCloud />
      <h2>small</h2>
      <UploadCloud fontSize="small" />
      <h2>large</h2>
      <UploadCloud fontSize="large" />
    </div>
  ));
