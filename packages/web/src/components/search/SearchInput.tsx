import React from 'react';
import ViaMap from '../items/ViaMap';
import Search from '../svg/Search';
import LocationOption from './LocationOption';

interface searchProps {
  className?: string;
  inputStyle?: string;
}

const SearchInput = ({ className, inputStyle }: searchProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex justify-end relative bg-white [&>*]:py-1 [&>*]:px-4 font-normal text-gray-800 border border-gray-100 [&>:not(last-child)]:border-r shrink-0">
        <LocationOption />
        <input
          className={`placeholder-gray-300 placeholder:font-light placeholder:text-sm focus:outline-none pl-20 ${inputStyle}`}
          type="text"
          placeholder="땡기는 음식을 검색해보세요-!"
        />

        <button className="bg-gray-100" type="button">
          <Search size={20} color={'rgba(0,0,0,0.8)'} />
        </button>
      </div>
      <div className="pl-2">
        <ViaMap />
      </div>
    </div>
  );
};

export default SearchInput;
