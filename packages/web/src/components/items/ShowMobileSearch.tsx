import React from 'react';
import LocationOption from '../search/LocationOption';
import Search from '../svg/Search';
import ViaMap from './ViaMap';

interface SearchProps {
  search: boolean;
}
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

export const MobileSearch = ({ search }: SearchProps) => {
  return (
    <>
      {search && (
        <div className="flex items-center justify-between m-3 px-2 border border-gray-200 rounded [&>:first-child]:pr-2 [&>:not(:first-child)]:border-l min-sm:hidden">
          <LocationOption />
          <input
            type="text"
            placeholder="땡기는 음식을 검색해보세요"
            className="w-full p-2 focus:outline-none"
          />
          <ViaMap />
        </div>
      )}
    </>
  );
};
