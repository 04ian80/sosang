import React, { useRef, useState } from 'react';
import Menu from '../svg/Menu';
import Modal from '../system/Modal';
import { onCloseModal } from '../../lib/onCloseModal';

const MenuButton = ({ className }: { className: string }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const myMenu: { name: string; link: string }[] = [
    { name: '설정', link: '/setting' },
    { name: '고객센터', link: '/information' },
  ];

  const onClose = (e: Event) => {
    onCloseModal(buttonRef, setIsVisible, e);
  };

  return (
    <div className={`relative z-1000 ${className}`}>
      <button
        type="button"
        ref={buttonRef}
        onClick={() => {
          setIsVisible(true);
          console.log(buttonRef.current);
        }}
      >
        <Menu size={24} />
      </button>
      <Modal
        isVisible={isVisible}
        onClose={onClose}
        title={'메뉴'}
        className={'-right-2 top-10'}
        menus={myMenu}
      />
    </div>
  );
};

export default MenuButton;
