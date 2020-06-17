import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import * as React from 'react';
import { SvgIconProps } from '../typings';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '1em',
    height: '1em',
    color: 'currentColor',
    userSelect: 'none',
    fontSize: '24px',
    strokeWidth: '1.5px',
  },
  fontSizeSmall: {
    fontSize: '20px',
  },
  fontSizeLarge: {
    fontSize: '36px',
  },
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  colorSecondary: {
    color: theme.palette.secondary.main,
  },
  colorSuccess: {
    color: theme.palette.success.main,
  },
  colorError: {
    color: theme.palette.error.main,
  },
  colorDisabled: {
    color: theme.palette.text.disabled,
  },
  colorInherit: {
    color: theme.palette.common.white,
  },
  colorTextPrimary: {
    color: theme.palette.text.primary,
  },
  colorTextSecondary: {
    color: theme.palette.text.secondary,
  },
}));

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const SvgIcon = ({
  children,
  className,
  viewBox = '0 0 24 24',
  fontSize = 'default',
  color = 'default',
  ...other
}: SvgIconProps) => {
  const classes = useStyles();

  return (
    <svg
      className={clsx(
        classes.root,
        {
          // @ts-ignore
          [classes[`fontSize${capitalize(fontSize)}`]]: fontSize !== 'default',
          // @ts-ignore
          [classes[`color${capitalize(color)}`]]: color !== 'default',
        },
        className
      )}
      fill="none"
      focusable="false"
      viewBox={viewBox}
      {...other}
    >
      {children}
    </svg>
  );
};

export default React.memo(SvgIcon);
