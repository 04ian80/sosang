import React, { useRef, useState } from 'react';
import Modal from '../system/Modal';
import { onCloseModal } from '../../lib/onCloseModal';

const LoginedHead = ({ image }: { image: string }) => {
  const myMenu: { name: string; link: string }[] = [
    { name: '장소 등록하기', link: '/stores/add' },
    { name: '마이페이지', link: '/my' },
    { name: '내 리스트', link: '/mylist' },
    { name: '내 일기', link: '/mydiary' },
  ];
  const buttonRef = useRef<HTMLImageElement>(null);
  const [visible, setVisible] = useState(false);

  const onClose = (e: Event) => {
    onCloseModal(buttonRef, setVisible, e);
  };

  return (
    <div className="relative">
      <img
        src={image}
        alt="프로필 이미지"
        width="30"
        height="30"
        className="rounded-xl w-8 h-8 object-cover cursor-pointer"
        onClick={() => setVisible((prev) => !prev)}
        ref={buttonRef}
      />
      <Modal
        visible={visible}
        onClose={onClose}
        title={'내 계정'}
        className={'-right-1 top-11'}
        menus={myMenu}
      />
    </div>
  );
};

export default LoginedHead;
