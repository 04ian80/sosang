import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import Login from '../components/auth/Login';
import Seo from '../components/base/Seo';
import { setLoginModalStore } from '../stores/setLoginModal';
import { useSession, signOut } from 'next-auth/react';

const Home: NextPage = () => {
  const { data, status } = useSession();

  const isVisible = setLoginModalStore((state) => state.isVisible);
  const openLoginModal = setLoginModalStore((state) => state.openLoginModal);

  return (
    <>
      <Seo title="홈 | 머스트잇" content="소상공인 위주의 맛집 추천 웹사이트" />
      <div>홈</div>
      <p>status: {status}</p>
      <p>data: {data?.user?.name}</p>
      {data?.user ? (
        <button onClick={() => signOut()}>로그아웃</button>
      ) : (
        <button onClick={openLoginModal}>로그인</button>
      )}
      {isVisible && <Login />}
    </>
  );
};

export default Home;
