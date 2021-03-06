import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

export default createSvgIcon(
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6V6Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8 2V18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 6V22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
  </>
);
