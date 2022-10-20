import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { kakaoLogin } from '../api/auth/KakaoLogin';

const Redirect = () => {
  let router = useRouter();
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const path = (social: string) => new URL(window.location.href).pathname.includes(social);

    if (path('kakao')) {
      kakaoLogin({ code });
    }
    router.push('/');
  }, []);

  return <div>loading...</div>;
};

export default Redirect;
