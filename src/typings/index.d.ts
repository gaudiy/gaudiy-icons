import * as React from 'react';

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  color?:
    | 'default'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'success'
    | 'disabled'
    | 'error';
  fontSize?: 'default' | 'small' | 'large';
}

export default function SvgIcon(props: SvgIconProps): JSX.Element;
