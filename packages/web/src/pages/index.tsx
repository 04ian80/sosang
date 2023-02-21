import type { NextPage } from 'next';
import { useState } from 'react';
import Login from '../components/auth/Login';
import Seo from '../components/base/Seo';
import { setLoginModalStore } from '../stores/setLoginModal';
import { useSession } from 'next-auth/react';
import HomePage from '../components/base/HomePage';

const Home: NextPage = () => {
  const { data, status } = useSession();

  const isVisible = setLoginModalStore((state) => state.isVisible);

  return (
    <div className="z-1 relative">
      <Seo title="홈 | 머스트잇" content="소상공인 위주의 맛집 추천 웹사이트" />
      <HomePage />
      {isVisible && <Login />}
    </div>
  );
};

export default Home;
