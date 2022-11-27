import React from 'react';
import Search from '../svg/Search';

interface onShowProps {
  onShow(): void;
}

export const ShowMobileSearch = ({ onShow }: onShowProps) => {
  return (
    <button onClick={() => onShow()} className="min-sm:hidden">
      <Search size={20} />
    </button>
  );
};
