import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Props {
  link?: string;
  linkTitle?: string;
  SEARCH_BY_MAP?: boolean;
}

const HomeLinkButton = ({ link, linkTitle, SEARCH_BY_MAP }: Props) => {
  return (
    <Link href={`${link}`} legacyBehavior>
      <motion.a
        whileHover={{ opacity: 0.8 }}
        className={`cursor-pointer max-lg:text-xl text-2xl font-semibold rounded-2xl tracking-wide p-5 whitespace-nowrap ${
          SEARCH_BY_MAP ? `bg-gray-200 text-brandGreen-800` : `bg-brandGreen-900/90 text-white`
        }`}
      >
        {linkTitle} &nbsp;&nbsp;&nbsp; &gt;
      </motion.a>
    </Link>
  );
};

export default HomeLinkButton;
