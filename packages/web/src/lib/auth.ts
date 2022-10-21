const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
export const KAKAO_LOGIN = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

const CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
const CALLBACK_URL = process.env.NEXT_PUBLIC_NAVER_CALLBACK_URL;
export const NAVER_LOGIN = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=STATE_STRING&redirect_uri=${CALLBACK_URL}`;
