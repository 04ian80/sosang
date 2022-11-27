import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { setLoginModalStore } from '../../stores/setLoginModal';
import SearchInput from '../search/SearchInput';
import MenuButton from '../items/MenuButton';
import { ShowMobileSearch } from '../items/ShowMobileSearch';
import { MobileSearch } from '../search/MobileSearch';
import Profile from '../items/Profile';
import Link from 'next/link';

export const HeadBar = () => {
  const { data } = useSession();
  const openLoginModal = setLoginModalStore((state) => state.openLoginModal);
  const [isSearchBarMobile, setSearchSearchBar] = useState(false);

  return (
    <div className="relative z-9999">
      <div className="flex items-center justify-between px-6 py-3 shadow-sm">
        <Link href="/" legacyBehavior>
          <a className="font-bold text-xl text-brandGreen-900">머스트잇</a>
        </Link>

        <SearchInput className="max-sm:hidden" />

        <div className="relative flex items-center justify-end [&>*]:ml-3">
          <ShowMobileSearch onShow={() => setSearchSearchBar((prev) => !prev)} />
          {data?.user?.image ? (
            <Profile image={data.user.image} />
          ) : (
            <button
              onClick={openLoginModal}
              className="py-1 px-2 border border-blue-600 rounded-3xl text-blue-600"
            >
              로그인
            </button>
          )}
          <MenuButton className={'translate-y-1'} />
        </div>
      </div>
      <MobileSearch isSearchBarMobile={isSearchBarMobile} />
    </div>
  );
};
