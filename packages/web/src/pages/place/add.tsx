import { useRouter } from 'next/router';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import Seo from '../../components/base/Seo';
import FileUploader from '../../components/input/FileUploader';
import LocationInput from '../../components/input/LocationInput';
import Select from '../../components/input/Select';
import TextInput from '../../components/input/TextInput';
import { useValidateTel, useValidateUrl } from '../../hooks/useValidate';

const Add = () => {
  const [url, setUrl] = useState('');
  const [tel, setTel] = useState('');
  const [errors, setErrors] = useState<any>({ telErrorMessage: '', urlErrorMessage: '' });
  const [isImagesOverTen, setIsImagesOverTen] = useState(false);
  const [isRequiredFilled, setIsRequiredFilled] = useState(false);

  useValidateTel(tel, setErrors, errors);
  useValidateUrl(url, setErrors, errors);

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isImagesOverTen) {
      alert('사진이 10장 이상입니다.');
      return;
    }
    if (!isRequiredFilled) {
      alert('필수 양식을 채워주세요.');
      return;
    } else {
    }
    alert('submit');
    console.dir((e.target as HTMLFormElement).querySelectorAll('input')[0]);
    const inputs = (e.target as HTMLFormElement).querySelectorAll('input');

    // form data
    const data: { [key: number]: string } = {};
    for (let i = 0; i < inputs.length; i++) {
      for (let j = 0; j < inputs.length; j++) {
        data[i] = inputs[i].value;
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

  return (
    <>
      <Seo title="가게 제안하기 | 머스트잇" content="가게를 제안하기 위한 양식을 제출해주세요." />
      <div className="bg-white">
        <div className="flex flex-col items-center p-6">
          <h2 className="text-2xl mb-2">가게 제안하기</h2>
          <form
            encType="multipart/form-data"
            action="/api/place"
            method="post"
            id="addPlaceForm"
            onSubmit={(e) => handleSubmit(e)}
            className="relative flex flex-col justify-center items-center w-11/12 sm:w-96 px-2 pt-8 [&>:not(:nth-child(2))]:mb-4 [&>:nth-last-child(2)]:sm:mb-20 min-sm:border min-sm:border-gray-200 min-sm:rounded min-sm:shadow-md"
          >
            <TextInput
              setIsRequiredFilled={setIsRequiredFilled}
              required
              label="가게명"
              name="place"
              placeholder="매장 이름을 입력해주세요."
              error={errors.requiredError}
            />
            {/* <TextInput
              setIsRequiredFilled={setIsRequiredFilled}
              required
              label="위치"
              name="location"
              placeholder="매장 위치를 찾아주세요."
            />
            <TextInput name="location" placeholder="상세 정보를 입력해주세요.(예: 소상동 1층)" /> */}
            <LocationInput
              setIsRequiredFilled={setIsRequiredFilled}
              required
              label="위치"
              name="location"
              placeholder="매장 위치를 찾아주세요."
            />
            <FileUploader
              setIsImagesOverTen={setIsImagesOverTen}
              label="사진첨부"
              type="file"
              accept="image/*"
            />
            {/* <TextInput name="category" label="업종" placeholder="업종을 선택해주세요." /> */}
            <Select />
            <TextInput
              name="tel"
              label="전화번호"
              placeholder="대표 전화번호를 입력해주세요."
              error={errors.telErrorMessage}
              value={tel}
              setValue={setTel}
            />
            <TextInput
              name="url"
              label="홈페이지"
              placeholder="홈페이지 또는 SNS를 입력해주세요."
              error={errors.urlErrorMessage}
              value={url}
              setValue={setUrl}
            />
            <button className="absolute left-0 right-0 bottom-0 py-2 text-xl bg-brandGreen-800 rounded text-white min-sm:mx-4 hover:bg-brandGreen-700">
              제출하기
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Add;
