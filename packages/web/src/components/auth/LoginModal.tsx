import React, { useState } from 'react';
import SvgXmark from '../svg/Xmark';
import SocialLogin from './SocialLogin';
import { useLoginModalStore } from '../../stores/useLoginModal';

const LoginModal = () => {
  const close = useLoginModalStore((state) => state.close);

  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center h-screen p-6">
        <div className="relative w-10/12 mx-auto md:w-80 px-2 py-8 border border-gray-200 rounded-3xl shadow-md">
          <button onClick={close} className="absolute right-5 top-3">
            <SvgXmark />
          </button>
          <img className="mx-auto object-cover h-24" src="/logowobg.svg" width={200} height={50} />
          <SocialLogin
            loginUrl=""
            icon="google"
            iconstyle="pl-3"
            color="bg-googleBlue"
            name="구글 로그인"
          />
          <SocialLogin
            loginUrl=""
            icon="kakao"
            color="bg-kakaoYellow text-kakaoBrown"
            iconstyle="pl-2"
            name="카카오 로그인"
          />
          <SocialLogin
            loginUrl=""
            icon="naver"
            iconstyle="pl-3"
            color="bg-naverGreen"
            name="네이버 로그인"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

// export function getServerSideProps() {

//   return {
//     props: { login },
//   }
// }
