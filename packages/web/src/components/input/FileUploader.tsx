import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import AddFileButton from '../items/AddFileButton';
import Button from '../system/Button';
import InputGroup from './InputGroup';
import UploadedImg from './UploadedImg';

interface Props {
  type?: string;
  label?: string;
  accept?: string;
  required?: boolean;
  setIsImagesOverTen: Dispatch<SetStateAction<boolean>>;
}

const FileUploader = ({ type = 'text', label, accept, required, setIsImagesOverTen }: Props) => {
  const [images, setImages] = useState<string[]>([]);
  const fileInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (images.length > 10) {
      setIsImagesOverTen(true);
    } else if (images.length <= 10) {
      setIsImagesOverTen(false);
    }
  }, [images, setIsImagesOverTen]); // es-lint 원래 images만 있었는데 빠른 수정으로 setIsImagesOverTen도 추가 됨.

  const handleClick = () => {
    if (images.length > 10) {
      alert('사진은 10장까지 추가할 수 있습니다.');
      return;
    }
    fileInput?.current?.click();
  };

  // input type='file' 에서 막 올렸던 파일과 같은 파일을 올리지 못함. 하지만 다른 파일을 올리고 그 다음 올릴때는 또 올려짐
  // 어차피 같은 파일은 못올리게 할 것이지만 만약 디폴트로 이렇게 못올릴땐 '같은 사진을 못올립니다' 문구도 못 띄우기 때문에 일단 올릴 수 있게 하고 문구 띄울 예정.
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
    <InputGroup className="flex flex-col w-full sm:w-full" label={label} required={required}>
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
