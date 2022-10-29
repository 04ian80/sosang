import React, { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Map from '../svg/Map';
import Menu from '../svg/Menu';
import { setLoginModalStore } from '../../stores/setLoginModal';
import Search from '../svg/Search';
import { useRouter } from 'next/router';
import SearchInput from '../search/SearchInput';
import ViaMap from '../items/ViaMap';
import LocationOption from '../search/LocationOption';

const HeadBar = () => {
  const { data } = useSession();
  const router = useRouter();
  const openModal = setLoginModalStore((state) => state.open);
  const [isSearchBarSmall, setSearchSearchBar] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center justify-between px-2 py-3 shadow-sm">
        <button onClick={() => router.push('/')}>
          <h2 className="font-bold text-xl text-emerald-900">머스트잇</h2>
        </button>

        {/* 검색창 */}
        <SearchInput className="max-sm:hidden" />

        <div className="relative flex items-center justify-end [&>*]:ml-3">
          <button onClick={() => setSearchSearchBar((prev) => !prev)} className="min-sm:hidden">
            <Search size={20} />
          </button>
          {data?.user?.image ? (
            <>
              <div>
                <img
                  src={data.user.image}
                  alt="프로필 이미지"
                  width="30"
                  height="30"
                  className="rounded-xl w-8 h-8 object-cover"
                />
              </div>
            </>
          ) : (
            <button
              onClick={openModal}
              className="py-1 px-2 border border-blue-600 rounded-3xl text-blue-600"
            >
              로그인
            </button>
          )}
          <button type="button">
            <Menu size={24} />
          </button>
        </div>
      </div>
      {isSearchBarSmall && (
        <div className="flex items-center justify-between m-3 px-2 border border-gray-200 rounded overflow-hidden [&>:first-child]:pr-2 [&>:not(:first-child)]:border-l min-sm:hidden">
          <LocationOption />
          <input
            type="text"
            placeholder="땡기는 음식을 검색해보세요-!"
            className="w-full p-2 focus:outline-none"
          />
          <ViaMap />
        </div>
      )}
    </div>
  );
};

export default HeadBar;
