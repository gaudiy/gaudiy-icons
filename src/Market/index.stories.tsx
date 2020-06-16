import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Activity from './Activity';
import BarChart from './BarChart';
import BarChart2 from './BarChart2';
import Coin from './Coin';
import CreditCard from './CreditCard';
import DepositEth from './DepositEth';
import DepositJpy from './DepositJpy';
import Eth from './Eth';
import Gift from './Gift';
import Jpy from './Jpy';
import PieChart from './PieChart';
import PointCoin from './PointCoin';
import PointText from './PointText';
import Shop from './Shop';
import ShoppingBag from './ShoppingBag';
import ShoppingCart from './ShoppingCart';
import Wallet from './Wallet';
import WalletJpy from './WalletJpy';
import WithdrawEth from './WithdrawEth';
import WithdrawJpy from './WithdrawJpy';

storiesOf('components | Market', module)
  .addDecorator((story) => <div style={{ color: '#FFFFFF' }}>{story()}</div>)
  .add('DepositJpy', () => (
    <div>
      <h3>DepositJpy</h3>
      <DepositJpy />
      <h2>small</h2>
      <DepositJpy fontSize="small" />
      <h2>large</h2>
      <DepositJpy fontSize="large" />
    </div>
  ))
  .add('WithdrawJpy', () => (
    <div>
      <h3>WithdrawJpy</h3>
      <WithdrawJpy />
      <h2>small</h2>
      <WithdrawJpy fontSize="small" />
      <h2>large</h2>
      <WithdrawJpy fontSize="large" />
    </div>
  ))
  .add('DepositEth', () => (
    <div>
      <h3>DepositEth</h3>
      <DepositEth />
      <h2>small</h2>
      <DepositEth fontSize="small" />
      <h2>large</h2>
      <DepositEth fontSize="large" />
    </div>
  ))
  .add('WithdrawEth', () => (
    <div>
      <h3>WithdrawEth</h3>
      <WithdrawEth />
      <h2>small</h2>
      <WithdrawEth fontSize="small" />
      <h2>large</h2>
      <WithdrawEth fontSize="large" />
    </div>
  ))
  .add('Jpy', () => (
    <div>
      <h3>Jpy</h3>
      <Jpy />
      <h2>small</h2>
      <Jpy fontSize="small" />
      <h2>large</h2>
      <Jpy fontSize="large" />
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
  .add('PointText', () => (
    <div>
      <h3>PointText</h3>
      <PointText />
      <h2>small</h2>
      <PointText fontSize="small" />
      <h2>large</h2>
      <PointText fontSize="large" />
    </div>
  ))
  .add('PointCoin', () => (
    <div>
      <h3>PointCoin</h3>
      <PointCoin />
      <h2>small</h2>
      <PointCoin fontSize="small" />
      <h2>large</h2>
      <PointCoin fontSize="large" />
    </div>
  ))
  .add('Coin', () => (
    <div>
      <h3>Coin</h3>
      <Coin />
      <h2>small</h2>
      <Coin fontSize="small" />
      <h2>large</h2>
      <Coin fontSize="large" />
    </div>
  ))
  .add('BarChart', () => (
    <div>
      <h3>BarChart</h3>
      <BarChart />
      <h2>small</h2>
      <BarChart fontSize="small" />
      <h2>large</h2>
      <BarChart fontSize="large" />
    </div>
  ))
  .add('BarChart2', () => (
    <div>
      <h3>BarChart2</h3>
      <BarChart2 />
      <h2>small</h2>
      <BarChart2 fontSize="small" />
      <h2>large</h2>
      <BarChart2 fontSize="large" />
    </div>
  ))
  .add('CreditCard', () => (
    <div>
      <h3>CreditCard</h3>
      <CreditCard />
      <h2>small</h2>
      <CreditCard fontSize="small" />
      <h2>large</h2>
      <CreditCard fontSize="large" />
    </div>
  ))
  .add('Wallet', () => (
    <div>
      <h3>Wallet</h3>
      <Wallet />
      <h2>small</h2>
      <Wallet fontSize="small" />
      <h2>large</h2>
      <Wallet fontSize="large" />
    </div>
  ))
  .add('WalletJpy', () => (
    <div>
      <h3></h3>
      <WalletJpy />
      <h2>small</h2>
      <WalletJpy fontSize="small" />
      <h2>large</h2>
      <WalletJpy fontSize="large" />
    </div>
  ))
  .add('PieChart', () => (
    <div>
      <h3>PieChart</h3>
      <PieChart />
      <h2>small</h2>
      <PieChart fontSize="small" />
      <h2>large</h2>
      <PieChart fontSize="large" />
    </div>
  ))
  .add('Activity', () => (
    <div>
      <h3>Activity</h3>
      <Activity />
      <h2>small</h2>
      <Activity fontSize="small" />
      <h2>large</h2>
      <Activity fontSize="large" />
    </div>
  ))
  .add('Shop', () => (
    <div>
      <h3>Shop</h3>
      <Shop />
      <h2>small</h2>
      <Shop fontSize="small" />
      <h2>large</h2>
      <Shop fontSize="large" />
    </div>
  ))
  .add('ShoppingCart', () => (
    <div>
      <h3>ShoppingCart</h3>
      <ShoppingCart />
      <h2>small</h2>
      <ShoppingCart fontSize="small" />
      <h2>large</h2>
      <ShoppingCart fontSize="large" />
    </div>
  ))
  .add('Gift', () => (
    <div>
      <h3>Gift</h3>
      <Gift />
      <h2>small</h2>
      <Gift fontSize="small" />
      <h2>large</h2>
      <Gift fontSize="large" />
    </div>
  ))
  .add('ShoppingBag', () => (
    <div>
      <h3>ShoppingBag</h3>
      <ShoppingBag />
      <h2>small</h2>
      <ShoppingBag fontSize="small" />
      <h2>large</h2>
      <ShoppingBag fontSize="large" />
    </div>
  ));
