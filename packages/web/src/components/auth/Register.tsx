import React, { useState } from 'react';
import { useLoginModalStore } from '../../stores/useLoginModal';
import SvgXmark from '../svg/Xmark';
import InputGroup from './InputGroup';
import SocialLogin from './SocialLogin';

const Register = () => {
  const close = useLoginModalStore((state) => state.close);
  const [name, setName] = useState('');

  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center h-screen p-6">
        <div className="relative w-10/12 mx-auto md:w-80 px-2 py-8 border border-gray-200 rounded-3xl shadow-md">
          <button onClick={close} className="absolute right-5 top-3">
            <SvgXmark />
          </button>
          <img className="mx-auto object-cover h-24" src="/logowobg.svg" width={200} height={50} />
          <InputGroup
            type="text"
            placeholder="이름을 입력해주세요"
            value={name}
            setValue={setName}
            error="2글자 이상의 문자를 입력해주세요"
          />
          <InputGroup
            type="text"
            placeholder="휴대폰 번호를 입력해주세요"
            value={name}
            setValue={setName}
            error="알맞는 휴대폰 번호 형식이 아닙니다."
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
