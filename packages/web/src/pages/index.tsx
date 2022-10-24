import type { NextPage } from 'next';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Seo from '../components/base/Seo';
import { setLoginModalStore } from '../stores/setLoginModal';
import { useSession, signOut } from 'next-auth/react';

const Home: NextPage = () => {
  const { data, status } = useSession();

  const login = setLoginModalStore((state) => state.visible);
  const open = setLoginModalStore((state) => state.open);

  return (
    <>
      <Seo title="홈 | 소상공간" content="소상공인 위주의 맛집 추천 웹사이트" />
      <div>홈</div>
      <p>status: {status}</p>
      <p>data: {data?.user?.name}</p>
      {data?.user?.image && (
        <img src={data.user.image} alt="프로필 이미지" width="20" height="20" />
      )}
      {data?.user ? (
        <button onClick={() => signOut()}>로그아웃</button>
      ) : (
        <button onClick={open}>로그인</button>
      )}
      {login && <Login />}
    </>
  );
};

export default Home;
