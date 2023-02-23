import React, { useState } from 'react';
import Seo from '../../components/base/Seo';
import FileUploader from '../../components/input/FileUploader';
import LocationInput from '../../components/input/LocationInput';
import Select from '../../components/input/Select';
import TextInput from '../../components/input/TextInput';
import { useValidateTel, useValidateUrl } from '../../hooks/useValidate';
import onSubmitForm from '../../lib/onSubmitForm';

interface Props {
  coordsToAddress: string;
}

export const AddPlace = ({ coordsToAddress }: Props) => {
  const [url, setUrl] = useState('');
  const [tel, setTel] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [errors, setErrors] = useState<any>({
    placeRequiredMessage: '',
    loactionRequiredMessage: '',
    telErrorMessage: '',
    urlErrorMessage: '',
  });

  // 전화번호 & 홈페이지 url 유효성검사
  useValidateTel(tel, setErrors, errors);
  useValidateUrl(url, setErrors, errors);

  return (
    <>
      <Seo title="가게 제안하기 | 머스트잇" content="가게를 제안하기 위한 양식을 제출해주세요." />
      <div className="bg-white">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl mt-20 mb-2">가게 제안하기</h2>
          <form
            encType="multipart/form-data"
            action="/api/place"
            method="post"
            id="addPlaceForm"
            onSubmit={(e) => onSubmitForm(e, images)}
            className="relative flex flex-col justify-center items-center w-11/12 sm:w-96 px-2 pt-8 [&>:not(:nth-child(2))]:mb-4 [&>:nth-last-child(2)]:sm:mb-20 min-sm:border min-sm:border-gray-200 min-sm:rounded min-sm:shadow-md"
          >
            <TextInput
              required
              label="가게명"
              name="place"
              placeholder="매장 이름을 입력해주세요."
            />
            <LocationInput
              required
              label="위치"
              value={coordsToAddress}
              name="address"
              placeholder="매장 위치를 찾아주세요."
            />
            <FileUploader
              images={images}
              setImages={setImages}
              label="사진첨부"
              type="file"
              accept="image/*"
            />
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
