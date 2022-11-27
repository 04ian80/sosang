import React, { useEffect, useState } from 'react';
import SvgXmark from '../svg/Xmark';
import SocialLogin from './SocialLogin';
import { setLoginModalStore } from '../../stores/setLoginModal';
import NextSocialLogin from './NextSocialLogin';

const Login = () => {
  const closeLoginModal = setLoginModalStore((state) => state.closeLoginModal);

  // 백엔드 로그인 인증인가 api 받아오기
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center h-screen p-6">
        <div className="relative flex flex-col justify-center items-center w-10/12 mx-auto sm:w-72 px-2 py-8 border border-gray-200 rounded-3xl shadow-md">
          <button onClick={closeLoginModal} className="absolute right-5 top-3 hover:opacity-60">
            <SvgXmark size={30} />
          </button>
          <h2 className="font-bold text-slate-600 text-4xl my-4">머스트잇</h2>
          <NextSocialLogin
            icon="google"
            iconstyle="pr-2"
            color="bg-googleBlue"
            name="구글 계정으로 로그인"
          />
          <NextSocialLogin
            icon="kakao"
            color="bg-kakaoYellow"
            iconstyle="text-black pr-3"
            textColor="text-kakaoLabel"
            name="카카오 계정으로 로그인"
          />
          <NextSocialLogin
            icon="naver"
            iconstyle="pr-2"
            color="bg-naverGreen"
            name="네이버 계정으로 로그인"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
