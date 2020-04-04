import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import * as React from 'react';
import { SvgIconProps } from '../typings';

const useStyles = makeStyles(() => ({
  root: {
    width: '1em',
    height: '1em',
    color: 'currentColor',
    userSelect: 'none',
    fontAize: '24px',
  },
  fontSizeSmall: {
    fontSize: '20px',
  },
  fontSizeLarge: {
    fontSize: '36px',
  },
}));

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const SvgIcon = (props: SvgIconProps) => {
  const classes = useStyles();
  const { children, className, viewBox = '0 0 24 24', fontSize = 'default', ...other } = props;

  return (
    <svg
      // @ts-ignore
      className={clsx(classes.root, classes[`fontSize${capitalize(fontSize)}`], className)}
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
