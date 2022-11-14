import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';
import SvgXmark from '../svg/Xmark';

interface Props {
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
}

const UploadedImg = ({ images, setImages }: Props) => {
  return (
    <div className="scroll-x scrollbar-hide">
      {images.map((url, i) => {
        return (
          <div key={i} className="relative inline-block m-2">
            <Image
              src={url}
              width="140"
              height="140"
              quality={50}
              placeholder={'blur'}
              blurDataURL="/placeholder.png"
              className="w-10 h-10"
            />
            <div
              onClick={() => setImages(images.filter((e) => e !== url))}
              className="absolute -right-2 -top-1 bg-gray-300 hover:bg-gray-200 active:bg-gray-500 rounded-3xl cursor-pointer"
            >
              <SvgXmark size={20} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UploadedImg;
