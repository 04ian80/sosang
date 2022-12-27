import React from 'react';
import { SVGType } from '../../lib/types';

const DuoChat = ({ size = 24, color = 'currentColor' }: SVGType) => {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="#eab308"
        className="bi biDuo-chat-fill absolute -bottom-4 -right-5 -scale-x-100"
        viewBox="0 0 16 16"
      >
        <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={color}
        className="bi bi-chat-fill absolute -left-5 -top-4"
        viewBox="0 0 16 16"
      >
        <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
      </svg>
    </div>
  );
};

export default DuoChat;
