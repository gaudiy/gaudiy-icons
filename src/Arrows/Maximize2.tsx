import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  <>
    <path d="M15 3H21V9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 21H3V15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 3L14 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 21L10 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
  </>
);
