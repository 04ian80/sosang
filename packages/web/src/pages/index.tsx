import type { NextPage } from 'next';
import Login from '../components/auth/Login';
import Seo from '../components/base/Seo';
import { setLoginModalStore } from '../stores/loginModal';

const Home: NextPage = () => {
  const login = setLoginModalStore((state) => state.visible);
  const open = setLoginModalStore((state) => state.open);

  return (
    <>
      <Seo title="홈 | 소상공간" content="소상공인 위주의 맛집 추천 웹사이트" />
      <div>홈</div>
      <button onClick={open}>로그인/회원가입</button>
      {login && <Login />}
    </>
  );
};

export default Home;
