import type { NextPage } from 'next';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Seo from '../components/base/Seo';
import { useLoginModalStore } from '../stores/useLoginModal';

const Home: NextPage = () => {
  const login = useLoginModalStore((state) => state.visible);
  const open = useLoginModalStore((state) => state.open);

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
