import axios from 'axios';

interface AuthParams {
  code: string | null;
}

export async function kakaoLogin(params: AuthParams) {
  try {
    const res = await axios.post('/login/kakao', params, { withCredentials: true });
    console.log('res', res, params);
  } catch (error) {
    console.log(error);
  }
}

export async function naverLogin(params: AuthParams) {
  try {
    const res = await axios.post('/login/naver', params, { withCredentials: true });
    console.log('res', res, params);
  } catch (error) {
    console.log(error);
  }
}
