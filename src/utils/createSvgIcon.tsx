import * as React from 'react';
import SvgIcon from '../SvgIcon';

const { memo, forwardRef } = React;

const createSvgIcon = (path: React.ReactNode) => {
  const Component = forwardRef<any, any>((props, ref) => (
    <SvgIcon ref={ref} {...props}>
      {path}
    </SvgIcon>
  ));
  return memo(Component);
};

export default createSvgIcon;
