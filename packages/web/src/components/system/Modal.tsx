import Link from 'next/link';
import React, { useRef } from 'react';
import { signOut } from 'next-auth/react';
import { useClickOutside } from '../../hooks/useClickOutside';

interface ModalProps {
  visible: boolean;
  onClose(e?: Event): void;
  title: string;
  className?: string;
  menus?: { name: string; link: string }[];
}

const Modal = ({ visible, onClose, title, className, menus }: ModalProps) => {
  const myAccount = title === '내 계정';
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutside(modalRef, (e) => {
    onClose(e);
  });

  return (
    <>
      {visible && (
        <div
          ref={modalRef}
          className={`border rounded-lg border-gray-200 absolute w-40 z-1000 bg-white after:content-[''] after:absolute after:-top-1 after:right-4 after:w-2 after:h-2 after:bg-white after:rotate-45 after:border-l after:border-t ${className}`}
        >
          <h2 className="border-b-2 px-4 py-3 text-lg">{title}</h2>
          <div className="flex flex-col">
            {menus?.map((item) => (
              <div
                key={item.name}
                onClick={() => onClose()}
                className="flex items-center justify-between group px-4 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                <Link href={item.link}>
                  <a>{item.name}</a>
                </Link>
                <span className="invisible group-hover:visible">&gt;</span>
              </div>
            ))}
            {myAccount && (
              <div
                className="underline cursor-pointer px-4 py-2 border-t text-sm text-red-500 hover:text-red-400"
                onClick={() => signOut()}
              >
                로그아웃
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
