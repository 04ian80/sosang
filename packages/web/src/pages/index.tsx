import type { NextPage } from 'next';
import LoginModal from '../components/auth/LoginModal';
import Seo from '../components/base/Seo';
import { useLoginModalStore } from '../stores/useLoginModal';

const Home: NextPage = () => {
  const login = useLoginModalStore((state) => state.visible);
  const open = useLoginModalStore((state) => state.open);
  const close = useLoginModalStore((state) => state.close);

  return (
    <>
      <Seo title="홈 | 소상공간" content="소상공인 위주의 맛집 추천 웹사이트" />
      <div>홈</div>
      <button className="bg-googleBlue text-white rounded-lg p-2 text-xl" onClick={open}>
        로그인
      </button>
      {login && <LoginModal />}
    </>
  );
};

export default Home;
