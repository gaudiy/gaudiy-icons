import clsx from 'clsx';
import * as React from 'react';
import { SvgIconProps } from '../typings';
import './styles.scss';

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const SvgIcon = (props: SvgIconProps) => {
  const { children, className, viewBox = '0 0 24 24', fontSize = 'default', ...other } = props;

  return (
    <svg
      className={clsx('root', `fontSize${capitalize(fontSize)}`, className)}
      focusable="false"
      viewBox={viewBox}
      fill="none"
      {...other}
    >
      {children}
    </svg>
  );
};

export default React.memo(SvgIcon);
