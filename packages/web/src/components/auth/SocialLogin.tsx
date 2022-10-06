import Link from 'next/link';
import React from 'react';
import SvgArrowRight from '../svg/ArrowRight';
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
}

const SocialLogin = ({ loginUrl, name, color, icon, iconstyle }: Props) => {
  const iconEl = React.createElement(IconMap[icon]);

  return (
    <Link href={loginUrl} passHref>
      <a
        rel="noopener noreferrer"
        className={`flex items-center justify-between mx-5 my-4 py-2 pr-3 rounded-xl text-2xl text-white font-bold ${color}`}
      >
        <div className={iconstyle}>{iconEl}</div>
        <span className="text-base">{name}</span>
        <SvgArrowRight />
      </a>
    </Link>
  );
};

export default SocialLogin;
