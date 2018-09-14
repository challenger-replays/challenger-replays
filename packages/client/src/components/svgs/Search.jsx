import React from 'react';

export default function Search({ width = '100%', height = '100%' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 30">
      <circle
        cx="13"
        cy="13"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M26 26l-6.563-6.563"
      />
    </svg>
  );
}
