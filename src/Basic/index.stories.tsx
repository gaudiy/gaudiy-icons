import { storiesOf } from '@storybook/react';
import * as React from 'react';
import ArrowBack from './ArrowBack';
import AtSign from './AtSign';
import Bell from './Bell';
import BellOff from './BellOff';
import Calendar from './Calendar';
import Camera from './Camera';
import Chat from './Chat';
import Check from './Check';
import CheckCircle from './CheckCircle';
import Clock from './Clock';
import Comment from './Comment';
import Copy from './Copy';
import Download from './Download';
import Edit from './Edit';
import Eye from './Eye';
import EyeOff from './EyeOff';
import Filter from './Filter';
import Flag from './Flag';
import Globe from './Globe';
import Heart from './Heart';
import Home from './Home';
import Image from './Image';
import Link from './Link';
import Mail from './Mail';
import MapPin from './MapPin';
import Menu from './Menu';
import MessageSquare from './MessageSquare';
import Minus from './Minus';
import MoreHorizontal from './MoreHorizontal';
import MoreVertical from './MoreVertical';
import Plus from './Plus';
import Reply from './Reply';
import Search from './Search';
import Send from './Send';
import Setting from './Setting';
import Share from './Share';
import Star from './Star';
import ThumbsDown from './ThumbsDown';
import ThumbsUp from './ThumbsUp';
import Trash from './Trash';
import Upload from './Upload';
import X from './X';
import Images from './Images';

storiesOf('components | Basic', module)
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
  .add('Home', () => (
    <div>
      <h3>Home</h3>
      <Home />
      <h2>small</h2>
      <Home fontSize="small" />
      <h2>large</h2>
      <Home fontSize="large" />
    </div>
  ))
  .add('Mail', () => (
    <div>
      <h3>Mail</h3>
      <Mail />
      <h2>small</h2>
      <Mail fontSize="small" />
      <h2>large</h2>
      <Mail fontSize="large" />
    </div>
  ))
  .add('Edit', () => (
    <div>
      <h3>Edit</h3>
      <Edit />
      <h2>small</h2>
      <Edit fontSize="small" />
      <h2>large</h2>
      <Edit fontSize="large" />
    </div>
  ))
  .add('Image', () => (
    <div>
      <h3>Image</h3>
      <Image />
      <h2>small</h2>
      <Image fontSize="small" />
      <h2>large</h2>
      <Image fontSize="large" />
    </div>
  ))
  .add('Images', () => (
    <div>
      <h3>Images</h3>
      <Images />
      <h2>small</h2>
      <Images fontSize="small" />
      <h2>large</h2>
      <Images fontSize="large" />
    </div>
  ))
  .add('Camera', () => (
    <div>
      <h3>Camera</h3>
      <Camera />
      <h2>small</h2>
      <Camera fontSize="small" />
      <h2>large</h2>
      <Camera fontSize="large" />
    </div>
  ))
  .add('Send', () => (
    <div>
      <h3>Send</h3>
      <Send />
      <h2>small</h2>
      <Send fontSize="small" />
      <h2>large</h2>
      <Send fontSize="large" />
    </div>
  ))
  .add('Calendar', () => (
    <div>
      <h3>Calendar</h3>
      <Calendar />
      <h2>small</h2>
      <Calendar fontSize="small" />
      <h2>large</h2>
      <Calendar fontSize="large" />
    </div>
  ))
  .add('Globe', () => (
    <div>
      <h3>Globe</h3>
      <Globe />
      <h2>small</h2>
      <Globe fontSize="small" />
      <h2>large</h2>
      <Globe fontSize="large" />
    </div>
  ))
  .add('Clock', () => (
    <div>
      <h3>Clock</h3>
      <Clock />
      <h2>small</h2>
      <Clock fontSize="small" />
      <h2>large</h2>
      <Clock fontSize="large" />
    </div>
  ))
  .add('Reply', () => (
    <div>
      <h3>Reply</h3>
      <Reply />
      <h2>small</h2>
      <Reply fontSize="small" />
      <h2>large</h2>
      <Reply fontSize="large" />
    </div>
  ))
  .add('Setting', () => (
    <div>
      <h3>Setting</h3>
      <Setting />
      <h2>small</h2>
      <Setting fontSize="small" />
      <h2>large</h2>
      <Setting fontSize="large" />
    </div>
  ))
  .add('Search', () => (
    <div>
      <h3>Search</h3>
      <Search />
      <h2>small</h2>
      <Search fontSize="small" />
      <h2>large</h2>
      <Search fontSize="large" />
    </div>
  ))
  .add('Heart', () => (
    <div>
      <h3>Heart</h3>
      <Heart />
      <h2>small</h2>
      <Heart fontSize="small" />
      <h2>large</h2>
      <Heart fontSize="large" />
    </div>
  ))
  .add('Star', () => (
    <div>
      <h3>Star</h3>
      <Star />
      <h2>small</h2>
      <Star fontSize="small" />
      <h2>large</h2>
      <Star fontSize="large" />
    </div>
  ))
  .add('Trash', () => (
    <div>
      <h3>Trash</h3>
      <Trash />
      <h2>small</h2>
      <Trash fontSize="small" />
      <h2>large</h2>
      <Trash fontSize="large" />
    </div>
  ))
  .add('Flag', () => (
    <div>
      <h3>Flag</h3>
      <Flag />
      <h2>small</h2>
      <Flag fontSize="small" />
      <h2>large</h2>
      <Flag fontSize="large" />
    </div>
  ))
  .add('Bell', () => (
    <div>
      <h3>Bell</h3>
      <Bell />
      <h2>small</h2>
      <Bell fontSize="small" />
      <h2>large</h2>
      <Bell fontSize="large" />
    </div>
  ))
  .add('BellOff', () => (
    <div>
      <h3>BellOff</h3>
      <BellOff />
      <h2>small</h2>
      <BellOff fontSize="small" />
      <h2>large</h2>
      <BellOff fontSize="large" />
    </div>
  ))
  .add('AtSign', () => (
    <div>
      <h3>AtSign</h3>
      <AtSign />
      <h2>small</h2>
      <AtSign fontSize="small" />
      <h2>large</h2>
      <AtSign fontSize="large" />
    </div>
  ))
  .add('CheckCircle', () => (
    <div>
      <h3>CheckCircle</h3>
      <CheckCircle />
      <h2>small</h2>
      <CheckCircle fontSize="small" />
      <h2>large</h2>
      <CheckCircle fontSize="large" />
    </div>
  ))
  .add('Check', () => (
    <div>
      <h3>Check</h3>
      <Check />
      <h2>small</h2>
      <Check fontSize="small" />
      <h2>large</h2>
      <Check fontSize="large" />
    </div>
  ))
  .add('Filter', () => (
    <div>
      <h3>Filter</h3>
      <Filter />
      <h2>small</h2>
      <Filter fontSize="small" />
      <h2>large</h2>
      <Filter fontSize="large" />
    </div>
  ))
  .add('Copy', () => (
    <div>
      <h3>Copy</h3>
      <Copy />
      <h2>small</h2>
      <Copy fontSize="small" />
      <h2>large</h2>
      <Copy fontSize="large" />
    </div>
  ))
  .add('Link', () => (
    <div>
      <h3>Link</h3>
      <Link />
      <h2>small</h2>
      <Link fontSize="small" />
      <h2>large</h2>
      <Link fontSize="large" />
    </div>
  ))
  .add('ThumbsUp', () => (
    <div>
      <h3>ThumbsUp</h3>
      <ThumbsUp />
      <h2>small</h2>
      <ThumbsUp fontSize="small" />
      <h2>large</h2>
      <ThumbsUp fontSize="large" />
    </div>
  ))
  .add('ThumbsDown', () => (
    <div>
      <h3>ThumbsDown</h3>
      <ThumbsDown />
      <h2>small</h2>
      <ThumbsDown fontSize="small" />
      <h2>large</h2>
      <ThumbsDown fontSize="large" />
    </div>
  ))
  .add('Share', () => (
    <div>
      <h3>Share</h3>
      <Share />
      <h2>small</h2>
      <Share fontSize="small" />
      <h2>large</h2>
      <Share fontSize="large" />
    </div>
  ))
  .add('Upload', () => (
    <div>
      <h3>Upload</h3>
      <Upload />
      <h2>small</h2>
      <Upload fontSize="small" />
      <h2>large</h2>
      <Upload fontSize="large" />
    </div>
  ))
  .add('Download', () => (
    <div>
      <h3>Download</h3>
      <Download />
      <h2>small</h2>
      <Download fontSize="small" />
      <h2>large</h2>
      <Download fontSize="large" />
    </div>
  ))
  .add('MapPin', () => (
    <div>
      <h3>MapPin</h3>
      <MapPin />
      <h2>small</h2>
      <MapPin fontSize="small" />
      <h2>large</h2>
      <MapPin fontSize="large" />
    </div>
  ))
  .add('Eye', () => (
    <div>
      <h3>Eye</h3>
      <Eye />
      <h2>small</h2>
      <Eye fontSize="small" />
      <h2>large</h2>
      <Eye fontSize="large" />
    </div>
  ))
  .add('EyeOff', () => (
    <div>
      <h3>EyeOff</h3>
      <EyeOff />
      <h2>small</h2>
      <EyeOff fontSize="small" />
      <h2>large</h2>
      <EyeOff fontSize="large" />
    </div>
  ))
  .add('X', () => (
    <div>
      <h3>X</h3>
      <X />
      <h2>small</h2>
      <X fontSize="small" />
      <h2>large</h2>
      <X fontSize="large" />
    </div>
  ))
  .add('Plus', () => (
    <div>
      <h3>Plus</h3>
      <Plus />
      <h2>small</h2>
      <Plus fontSize="small" />
      <h2>large</h2>
      <Plus fontSize="large" />
    </div>
  ))
  .add('Minus', () => (
    <div>
      <h3>Minus</h3>
      <Minus />
      <h2>small</h2>
      <Minus fontSize="small" />
      <h2>large</h2>
      <Minus fontSize="large" />
    </div>
  ))
  .add('MessageSquare', () => (
    <div>
      <h3>MessageSquare</h3>
      <MessageSquare />
      <h2>small</h2>
      <MessageSquare fontSize="small" />
      <h2>large</h2>
      <MessageSquare fontSize="large" />
    </div>
  ))
  .add('Menu', () => (
    <div>
      <h3>Menu</h3>
      <Menu />
      <h2>small</h2>
      <Menu fontSize="small" />
      <h2>large</h2>
      <Menu fontSize="large" />
    </div>
  ))
  .add('Comment', () => (
    <div>
      <h3>Comment</h3>
      <Comment />
      <h2>small</h2>
      <Comment fontSize="small" />
      <h2>large</h2>
      <Comment fontSize="large" />
    </div>
  ))
  .add('Chat', () => (
    <div>
      <h3>Chat</h3>
      <Chat />
      <h2>small</h2>
      <Chat fontSize="small" />
      <h2>large</h2>
      <Chat fontSize="large" />
    </div>
  ))
  .add('MoreVertical', () => (
    <div>
      <h3>MoreVertical</h3>
      <MoreVertical />
      <h2>small</h2>
      <MoreVertical fontSize="small" />
      <h2>large</h2>
      <MoreVertical fontSize="large" />
    </div>
  ))
  .add('MoreHorizontal', () => (
    <div>
      <h3>MoreHorizontal</h3>
      <MoreHorizontal />
      <h2>small</h2>
      <MoreHorizontal fontSize="small" />
      <h2>large</h2>
      <MoreHorizontal fontSize="large" />
    </div>
  ))
  .add('ArrowBack', () => (
    <div>
      <h3>ArrowBack</h3>
      <ArrowBack />
      <h2>small</h2>
      <ArrowBack fontSize="small" />
      <h2>large</h2>
      <ArrowBack fontSize="large" />
    </div>
  ));
