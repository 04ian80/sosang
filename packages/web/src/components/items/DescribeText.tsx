import React from 'react';
import DuoChat from '../svg/DuoChat';
import HeartSearch from '../svg/HeartSearch';
import CheckedList from '../svg/CheckedList';
import { motion, useSpring } from 'framer-motion';
import Map from '../svg/Map';
import BookmarkHeart from '../svg/BookmarkHeart';
import Pin from '../svg/Pin';

const IconMap = {
  chat: DuoChat,
  search: HeartSearch,
  list: CheckedList,
  map: Map,
  bookmark: BookmarkHeart,
  pin: Pin,
};

interface Props {
  icon: keyof typeof IconMap;
  describeTitle: string;
  describe: string;
  duration?: number;
}
const DescribeText = ({ icon, describeTitle, describe, duration }: Props) => {
  const iconEl = React.createElement(IconMap[icon]);

  return (
    <motion.li
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: [300, 0, 10], opacity: [0, 0.5, 1] }}
      transition={{
        type: 'spring',
        damping: 20,
        duration: duration,
        stiffness: 100,
      }}
      className="flex flex-col justify-center items-center"
    >
      <div className="flex justify-center items-center w-16 h-16 mb-3 bg-gray-300 rounded-full">
        {iconEl}
      </div>
      <span className="text-black whitespace-nowrap pb-2">{describeTitle}</span>
      <small className="text-black font-normal leading-5 flex-end w-28">{describe}</small>
    </motion.li>
  );
};

export default DescribeText;
