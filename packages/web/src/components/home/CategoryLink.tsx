import React from 'react';

interface Props {
  category: string;
  categoryEmoji: string;
}

const CategoryLink = ({ category = '카테고리', categoryEmoji = '🍴' }: Props) => {
  return (
    <div
      className={`flex flex-col justify-center items-center shrink-0 odd:bg-gray-300 even:bg-brandGreen-900/80 rounded-lg even:text-white odd:text-brandGreen-900 text-3xl m-3 max-xs:px-1 max-xs:py-3 min-xs:px-4 min-xs:py-6 min-sm:px-8 min-sm:py-10 max-lg:text-xl`}
    >
      <span className="text-6xl">{categoryEmoji}</span>
      <span>{category}</span>
    </div>
  );
};

export default CategoryLink;
