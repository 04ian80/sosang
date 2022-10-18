import React, { useEffect, useState } from 'react';
import SvgXmark from '../svg/Xmark';
import SocialLogin from './SocialLogin';
import { setLoginModalStore } from '../../stores/loginModal';
import { KAKAO_LOGIN } from '../../lib/api/auth';

const Login = () => {
  const close = setLoginModalStore((state) => state.close);

  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center h-screen p-6">
        <div className="relative flex flex-col justify-center items-center w-10/12 mx-auto sm:w-72 px-2 py-8 border border-gray-200 rounded-3xl shadow-md">
          <button onClick={close} className="absolute right-5 top-3 hover:opacity-60">
            <SvgXmark />
          </button>
          <h2 className="font-bold text-slate-600 text-4xl my-4">머스트잇</h2>
          <SocialLogin
            loginUrl=""
            icon="google"
            iconstyle="pr-2"
            color="bg-googleBlue"
            name="구글 계정으로 로그인"
          />
          <button id="naverIdLogin">네이버로그인</button>
          <SocialLogin
            loginUrl={KAKAO_LOGIN}
            icon="kakao"
            color="bg-kakaoYellow"
            iconstyle="text-black pr-3"
            textColor="text-kakaoLabel"
            name="카카오 계정으로 로그인"
          />
          <SocialLogin
            loginUrl=""
            id="naverIdLogin"
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
