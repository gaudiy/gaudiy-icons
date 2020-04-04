import * as React from 'react';

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  fontSize: 'default' | 'small' | 'large';
}

export type SvgComponent = React.FC<SvgIconProps>;
