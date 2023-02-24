import React from 'react';
import SvgKakao from '../svg/Kakao';
import SvgGoogle from '../svg/Google';
import SvgNaver from '../svg/Naver';
import { signIn } from 'next-auth/react';

const IconMap = {
  google: SvgGoogle,
  kakao: SvgKakao,
  naver: SvgNaver,
};

interface Props {
  icon: keyof typeof IconMap;
  name: string;
  color: string;
  iconstyle?: string;
  textColor?: string;
}

const NextSocialLogin = ({ name, color, icon, iconstyle, textColor }: Props) => {
  const iconEl = React.createElement(IconMap[icon]);

  return (
    <button
      type="button"
      onClick={() => signIn(icon)}
      className={`flex items-center justify-center w-48 my-2 h-9 pr-3 rounded-md text-2xl text-white font-bold hover:opacity-80 ${color}`}
    >
      <div className="flex items-center justify-center w-full">
        <div className={`${iconstyle}`}>{iconEl}</div>
        <span className={`text-sm font-medium ${textColor} font-roboto font-semibold`}>{name}</span>
      </div>
    </button>
  );
};

export default NextSocialLogin;
