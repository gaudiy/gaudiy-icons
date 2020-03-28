import * as React from 'react';
import './styles.css';

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  fontSize: 'default' | 'small' | 'large'
}


const SvgIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref)=> {
  const {
    children,
    viewBox = '0 0 24 24',
    fontSize = 'default',
    ...other
  } = props;

  return (
    <svg
      className={
        `.root .fontSize${capitalize(fontSize)}`
      }
      focusable="false"
      viewBox={viewBox}
      ref={ref}
      fill='none'
      {...other}
    >
      {children}
    </svg>
  );
});


export default React.memo(SvgIcon);
