import ViaMap from '../items/ViaMap';
import LocationOption from './LocationOption';

interface SearchProps {
  isSearchBarMobile: boolean;
}

export const MobileSearch = ({ isSearchBarMobile }: SearchProps) => {
  return (
    <>
      {isSearchBarMobile && (
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
