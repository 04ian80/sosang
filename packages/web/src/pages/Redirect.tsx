import React, { useEffect } from 'react';
import { setCode } from '../stores/authCode';

const Redirect = () => {
  // 인가코드
  let code = new URL(window.location.href).searchParams.get('code');
  const useCode = setCode((state) => state.setCode);
  const a = setCode((state) => state.code);

  useEffect(() => {
    async () => {
      await useCode(code);
      console.log(a);
    };
  }, []);
  return <div>loading...</div>;
};

export default Redirect;
