import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface AuthParams {
  code: string | null;
}

export async function kakaoLogin(params: AuthParams) {
  const res = await axios.post('/login/kakao', params, { withCredentials: true });
  console.log('res', res, params);
  // router.push('/', undefined, { shallow: true });
}
