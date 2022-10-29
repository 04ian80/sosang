import React, { useState } from 'react';
import Map from '../svg/Map';

const ViaMap = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative flex items-center cursor-pointer"
    >
      {hover && (
        <div
          className="
        absolute
        flex
        justify-center
        items-center
        w-20
        text-xs
        right-8
        px-1
        py-2
        rounded-xl
        bg-slate-600
        text-white
        after:content-['']
        after:absolute
        after:-right-1
        after:w-2
        after:h-2
        after:bg-slate-600
        after:rotate-45"
        >
          지도로 보기
        </div>
      )}
      <Map size={20} />
    </div>
  );
};

export default ViaMap;
