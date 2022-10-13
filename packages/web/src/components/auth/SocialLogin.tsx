import Link from 'next/link';
import React from 'react';
import SvgKakao from '../svg/Kakao';
import SvgGoogle from '../svg/Google';
import SvgNaver from '../svg/Naver';

const IconMap = {
  google: SvgGoogle,
  kakao: SvgKakao,
  naver: SvgNaver,
};

interface Props {
  icon: keyof typeof IconMap;
  loginUrl: string;
  name: string;
  color: string;
  iconstyle?: string;
  textColor?: string;
}

const SocialLogin = ({ loginUrl, name, color, icon, iconstyle, textColor }: Props) => {
  const iconEl = React.createElement(IconMap[icon]);

  return (
    <Link href={loginUrl} passHref>
      <a
        rel="noopener noreferrer"
        className={`flex items-center justify-center w-48 my-2 h-9 pr-3 rounded-md text-2xl text-white font-bold hover:opacity-80 ${color}`}
      >
        <div className="flex items-center justify-center w-full">
          <div className={`${iconstyle}`}>{iconEl}</div>
          <span className={`text-sm font-medium ${textColor} font-roboto`}>{name}</span>
        </div>
      </a>
    </Link>
  );
};

export default SocialLogin;
