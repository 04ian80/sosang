import { useEffect } from 'react';

const telRegex = /[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}/;
export const useValidateTel = (tel: string, setErrors: React.Dispatch<any>, errors: any) => {
  useEffect(() => {
    if (tel && !telRegex.test(tel)) {
      setErrors({ ...errors, telErrorMessage: '올바른 전화번호 형식으로 입력해주세요.' });
    } else if (!tel || telRegex.test(tel)) {
      setErrors({ ...errors, telErrorMessage: '' });
    }
  }, [tel]);
};

const urlRegex =
  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
export const useValidateUrl = (url: string, setErrors: React.Dispatch<any>, errors: any) => {
  useEffect(() => {
    if (url && !urlRegex.test(url)) {
      setErrors({ ...errors, urlErrorMessage: '올바른 url 형식으로 입력해주세요.' });
    } else {
      setErrors({ ...errors, urlErrorMessage: '' });
    }
  }, [url]);
};
