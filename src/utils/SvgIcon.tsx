import * as React from 'react';


const SvgIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref)=> {
  const {
    children,
    viewBox = '0 0 24 24',
    ...other
  } = props;

  return (
    <svg
      focusable="false"
      viewBox={viewBox}
      ref={ref}
      {...other}
    >
      {children}
    </svg>
  );
});


export default React.memo(SvgIcon);
