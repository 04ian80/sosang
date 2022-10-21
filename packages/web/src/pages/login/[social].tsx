import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { kakaoLogin, naverLogin } from '../../lib/api/login';

const Redirect: NextPage = () => {
  let router = useRouter();
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const path = (social: string) => new URL(window.location.href).pathname.includes(social);

    const kakao = path('kakao');
    const naver = path('naver');
    const google = path('google');

    if (kakao) {
      kakaoLogin({ code });
    } else if (naver) {
      naverLogin({ code });
    } else if (google) {
    }

    router.push('/');
  }, []);

  return <div>loading...</div>;
};

export default Redirect;
