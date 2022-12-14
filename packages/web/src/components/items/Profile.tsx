import React, { useRef, useState } from 'react';
import Modal from '../system/Modal';
import { onCloseModal } from '../../lib/onCloseModal';
import Image from 'next/image';

const Profile = ({ image }: { image: string }) => {
  const myMenu: { name: string; link: string }[] = [
    { name: '가게 제안하기', link: '/place/new' },
    { name: '마이페이지', link: '/mypage' },
    { name: '내 리스트', link: '/mylist' },
    { name: '내 일기', link: '/mydiary' },
  ];
  const buttonRef = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const onClose = (e: Event) => {
    onCloseModal(buttonRef, setIsVisible, e);
  };

  return (
    <div className="relative">
      <div ref={buttonRef} className="flex items-center">
        <Image
          src={image}
          alt="프로필 이미지"
          width="30"
          height="30"
          placeholder="blur"
          blurDataURL="/placeholder.png"
          className="rounded-xl w-8 h-8 object-cover cursor-pointer"
          onClick={() => setIsVisible(true)}
        />
      </div>
      <Modal
        isVisible={isVisible}
        onClose={onClose}
        title={'내 계정'}
        className={'-right-1 top-11'}
        menus={myMenu}
      />
    </div>
  );
};

export default Profile;
