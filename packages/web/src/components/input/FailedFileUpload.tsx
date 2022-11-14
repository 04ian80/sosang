import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import SvgXmark from '../svg/Xmark';
import Button from '../system/Button';
import InputGroup from './InputGroup';

interface Props {
  type?: string;
  label?: string;
  accept?: string;
  required?: boolean;
}

const FileUploader = ({ type = 'text', label, accept, required }: Props) => {
  const [selectedFile, setSelectedFile] = useState<File | undefined>();
  const [preview, setPreview] = useState('');
  const fileInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!selectedFile) {
      // undefined로 하면 Image src에서 "'undefined' 형식은 'string | StaticImport' 형식에 할당할 수 없습니다.ts(2322)" error
      setPreview('');
      return;
    }

    const objectUrl: any = URL.createObjectURL(selectedFile);

    console.log(objectUrl);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleClick = () => {
    fileInput?.current?.click();
    console.log(fileInput.current);
  };

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const file: File = (target?.files as FileList)[0];

    if (!target.files && !file) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(file);
  };

  return (
    <InputGroup className="flex flex-col w-full sm:w-full" label={label} required={required}>
      <>
        {selectedFile ? (
          <div className="flex border">
            <div className="group relative mx-3">
              <Image
                src={preview}
                className="w-36 h-36 object-cover rounded-lg"
                width={144}
                height={144}
              />
              <div className="invisible group-hover:visible absolute -right-2 -top-1 bg-gray-300 rounded-3xl">
                <SvgXmark size={20} />
              </div>
            </div>
            <div
              onClick={handleClick}
              className="flex items-center justify-center border-4 border-dashed rounded-lg w-36 h-36 cursor-pointer"
            >
              <span className="flex justify-center w-10 h-10 text-brandGreen-800 opacity-70 text-3xl">
                +
              </span>
            </div>
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
        {/* {selectedFile ? (
          <Button id="addPhoto" mode="form" handleClick={handleClick}>
            사진 다시 고르기
          </Button>
        ) : (
          <Button id="addPhoto" mode="form" handleClick={handleClick}>
            사진을 추가해주세요
          </Button>
        )} */}

        <input
          className="hidden"
          type={type}
          accept={accept}
          multiple
          ref={fileInput}
          onChange={handleChange}
        />
      </>
    </InputGroup>
  );
};

export default FileUploader;
