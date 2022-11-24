import React, { Dispatch, SetStateAction } from 'react';
import Button from '../system/Button';

interface Props {
  handleClick(): void;
  images: string[];
  mode: 'addable' | 'unaddable';
}

const AddFileButton = ({ handleClick, images, mode }: Props) => {
  return (
    <>
      <Button
        className={mode === 'addable' ? 'cursor-pointer' : 'cursor-not-allowed'}
        buttonColor={mode === 'addable' ? 'brandGreen-800' : 'gray-500'}
        id="addPhoto"
        mode="form"
        handleClick={handleClick}
      >
        <>
          <span className={mode === 'addable' ? undefined : 'text-gray-400'}>
            사진을 추가해주세요
          </span>
          <span className="text-gray-400">
            &#40;
            <span className={mode == 'addable' ? 'text-gray-400' : 'text-red-400'}>
              {images.length}
            </span>
            /10&#41;
          </span>
        </>
      </Button>
      {mode !== 'addable' && (
        <small className="flex justify-center pt-1 pl-2 font-medium text-red-400">
          사진은 10장까지 추가할 수 있습니다. {images.length - 10}장을 지워주세요
        </small>
      )}
    </>
  );
};

export default AddFileButton;
