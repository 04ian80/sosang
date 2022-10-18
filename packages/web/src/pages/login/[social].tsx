import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Redirect = () => {
  let router = useRouter();
  const [code, setCode] = useState<string | null>('');

  useEffect(() => {
    async function doIt() {
      const tmpCode = new URL(window.location.href).searchParams.get('code');
      setCode(tmpCode);
      try {
        const res = await axios.post('/login/kakao', { code }, { withCredentials: true });
        console.log('res', res, code);
        router.push('/', undefined, { shallow: true });
      } catch (error: any) {
        console.log(error);
      }
    }
    doIt();
  }, []);

  return <div>loading...</div>;
};

export default Redirect;
