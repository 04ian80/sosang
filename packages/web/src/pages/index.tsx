import type { NextPage } from 'next';
import { useState } from 'react';
import Login from '../components/auth/Login';
import Seo from '../components/base/Seo';
import { setLoginModalStore } from '../stores/setLoginModal';
import { useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data, status } = useSession();

  const isVisible = setLoginModalStore((state) => state.isVisible);

  return (
    <>
      <Seo title="홈 | 머스트잇" content="소상공인 위주의 맛집 추천 웹사이트" />
      <div>홈</div>
      <p>status: {status}</p>
      <p>data: {data?.user?.name}</p>
      {isVisible && <Login />}
    </>
  );
};

export default Home;
