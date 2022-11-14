import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import SvgXmark from '../svg/Xmark';
import Button from '../system/Button';
import InputGroup from './InputGroup';
import UploadedImg from './UploadedImg';

interface Props {
  type?: string;
  label?: string;
  accept?: string;
  required?: boolean;
}

const FileUploader = ({ type = 'text', label, accept, required }: Props) => {
  const [images, setImages] = useState<string[]>([]);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (images.length >= 10) {
      alert('사진은 10장까지 추가할 수 있습니다.');
      return;
    }
    fileInput?.current?.click();
  };

  const handleChange = (e: React.ChangeEvent) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const targetFilesObject = Array.from(targetFiles);
    console.log(targetFilesObject);
    const selectedFiles: string[] = targetFilesObject.map((file) => {
      return URL.createObjectURL(file);
    });
    setImages((prev) => prev.concat(selectedFiles));
  };

  return (
    <InputGroup className="flex flex-col w-full sm:w-full" label={label} required={required}>
      <>
        {images.length !== 0 ? (
          <div>
            <div className="flex items-center">
              <UploadedImg images={images} setImages={setImages} />
            </div>
            {images.length > 10 ? (
              <>
                <Button buttonColor="gray-500" id="addPhoto" mode="form" handleClick={handleClick}>
                  <>
                    <span className="text-gray-400">사진을 추가해주세요</span>
                    <span className="text-gray-400">
                      &#40;
                      <span className="text-red-400">{images.length}</span>
                      /10&#41;
                    </span>
                  </>
                </Button>
                <small className="flex justify-center pt-1 pl-2 font-medium text-red-400">
                  사진은 10장까지 추가할 수 있습니다. {images.length - 10}장을 지워주세요
                </small>
              </>
            ) : (
              <Button
                buttonColor="brandGreen-800"
                id="addPhoto"
                mode="form"
                handleClick={handleClick}
              >
                <>
                  <span>사진을 추가해주세요</span>
                  <span className="text-gray-400">
                    &#40;
                    <span className="text-gray-400">{images.length}</span>
                    /10&#41;
                  </span>
                </>
              </Button>
            )}
          </div>
        ) : (
          <div
            onClick={handleClick}
            className="flex items-center justify-center border-2 border-dashed border-brandGreen-800 rounded-lg w-full h-40 cursor-pointer"
          >
            <span className="flex justify-center w-10 h-10 border-2 border-brandGreen-800 rounded-3xl text-brandGreen-800 text-3xl">
              +
            </span>
          </div>
        )}

        <input
          className="hidden"
          type={type}
          accept={accept}
          name="images"
          multiple
          ref={fileInput}
          onChange={handleChange}
        />
      </>
    </InputGroup>
  );
};

export default FileUploader;
