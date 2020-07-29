import * as React from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const { forwardRef, memo } = React;

const createSvgIcon = (path: React.ReactNode) => {
  const Component = (props: SvgIconProps, ref: any) => (
    <SvgIcon ref={ref} {...props}>
      {path}
    </SvgIcon>
  );

  return memo(forwardRef<any, SvgIconProps>(Component));
};

export default createSvgIcon;
