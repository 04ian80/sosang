import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import AddFileButton from '../items/AddFileButton';
import InputGroup from './InputGroup';
import UploadedImg from './UploadedImg';

interface Props {
  type?: string;
  label?: string;
  accept?: string;
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
}

const FileUploader = ({ type = 'text', label, accept, images, setImages }: Props) => {
  const fileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (images.length >= 10) {
      alert('사진은 10장까지 추가할 수 있습니다.');
      return;
    }
    fileInput?.current?.click();
  };

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    (e.target as HTMLInputElement).value = '';
  };

  const handleChange = (e: React.ChangeEvent) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const targetFilesArray = Array.from(targetFiles);
    let selectedFiles: string[] = targetFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setImages((prev) => prev.concat(selectedFiles));
  };

  return (
    <InputGroup className="flex flex-col w-full sm:w-full" label={label}>
      <>
        {images.length !== 0 ? (
          <div>
            <div className="flex items-center">
              <UploadedImg images={images} setImages={setImages} />
            </div>
            <AddFileButton
              mode={images.length > 10 ? 'unaddable' : 'addable'}
              handleClick={handleClick}
              images={images}
            />
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
          onClick={handleInputClick}
        />
      </>
    </InputGroup>
  );
};

export default FileUploader;
