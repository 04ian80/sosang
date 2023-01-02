import { SyntheticEvent } from 'react';

const onSubmitForm = async (e: SyntheticEvent<HTMLFormElement>, images: string[]) => {
  e.preventDefault();

  if (images.length > 10) {
    alert('사진이 10장 이상입니다.');
    return;
  }

  // 가게 제안하기의 input들
  const inputs = (e.target as HTMLFormElement).querySelectorAll('input, select');

  // input의 value들을 inputsArr라는 배열안에 넣음
  const inputsArr: string[] = [];
  inputs.forEach((input) => {
    inputsArr.push((input as HTMLInputElement).value);
  });

  // 0,1,2번째 인덱스까지 확인해서 하나라도 비어있으면 양식 채우라고 alert
  for (let i = 0; i < 3; i++) {
    if (inputsArr[i] === '') {
      alert('필수 양식을 채워주세요.');
      return;
    }
  } // 여러장의 이미지 로드 시 첫번째 파일만 input value에 들어감.

  alert('submit');

  // form data
  const data: { [key: number]: string | string[] } = {};
  for (let i = 0; i < inputs.length; i++) {
    if (i === 3) {
      data[i] = images;
    } else {
      data[i] = (inputs[i] as HTMLInputElement).value;
    }
  }
  console.log(data);

  const JSONdata = JSON.stringify(data);
  const endpoint = 'http://localhost:3000/api/place';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSONdata,
  };

  // Send the form data to our forms API on Vercel and get a response.
  const response = await fetch(endpoint, options);

  // Get the response data from server as JSON.
  // If server returns the name submitted, that means the form works.
  const result = await response.json();
  alert(`Is this your full name: ${result.data}`);
};

export default onSubmitForm;
