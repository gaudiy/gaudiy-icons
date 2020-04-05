import * as React from 'react';

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  fontSize: 'default' | 'small' | 'large';
}

export default function SvgIcon(props: SvgIconProps): JSX.Element;
