import type { NextPage } from 'next';
import LoginModal from '../components/auth/LoginModal';
import Seo from '../components/base/Seo';

const Home: NextPage = () => {
  return (
    <>
      <Seo title='홈 | 소상공간' content='소상공인 위주의 맛집 추천 웹사이트' />
      <div>홈</div>
      <LoginModal />
    </>
  );
};

export default Home;
