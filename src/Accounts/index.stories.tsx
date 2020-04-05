import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Login from './Login';
import Logout from './Logout';
import User from './User';
import UserChange from './UserChange';
import UserCheck from './UserCheck';
import UserMinus from './UserMinus';
import UserPlus from './UserPlus';
import Users from './Users';
import UserX from './UserX';

storiesOf('components | Accounts', module)
  .addDecorator((story) => <div style={{ color: '#FFFFFF' }}>{story()}</div>)
  .add('Login', () => (
    <div>
      <h3>Login</h3>
      <Login />
      <h2>small</h2>
      <Login fontSize="small" />
      <h2>large</h2>
      <Login fontSize="large" />
    </div>
  ))
  .add('Logout', () => (
    <div>
      <h3>Logout</h3>
      <Logout />
      <h2>small</h2>
      <Logout fontSize="small" />
      <h2>large</h2>
      <Logout fontSize="large" />
    </div>
  ))
  .add('User', () => (
    <div>
      <h3>User</h3>
      <User />
      <h2>small</h2>
      <User fontSize="small" />
      <h2>large</h2>
      <User fontSize="large" />
    </div>
  ))
  .add('UserChange', () => (
    <div>
      <h3>UserChange</h3>
      <UserChange />
      <h2>small</h2>
      <UserChange fontSize="small" />
      <h2>large</h2>
      <UserChange fontSize="large" />
    </div>
  ))
  .add('UserCheck', () => (
    <div>
      <h3>UserCheck</h3>
      <UserCheck />
      <h2>small</h2>
      <UserCheck fontSize="small" />
      <h2>large</h2>
      <UserCheck fontSize="large" />
    </div>
  ))
  .add('UserMinus', () => (
    <div>
      <h3>UserMinus</h3>
      <UserMinus />
      <h2>small</h2>
      <UserMinus fontSize="small" />
      <h2>large</h2>
      <UserMinus fontSize="large" />
    </div>
  ))
  .add('UserPlus', () => (
    <div>
      <h3>UserPlus</h3>
      <UserPlus />
      <h2>small</h2>
      <UserPlus fontSize="small" />
      <h2>large</h2>
      <UserPlus fontSize="large" />
    </div>
  ))
  .add('Users', () => (
    <div>
      <h3>Users</h3>
      <Users />
      <h2>small</h2>
      <Users fontSize="small" />
      <h2>large</h2>
      <Users fontSize="large" />
    </div>
  ))
  .add('UserX', () => (
    <div>
      <h3>UserX</h3>
      <UserX />
      <h2>small</h2>
      <UserX fontSize="small" />
      <h2>large</h2>
      <UserX fontSize="large" />
    </div>
  ));
