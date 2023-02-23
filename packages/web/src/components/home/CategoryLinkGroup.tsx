import React from 'react';
import CategoryLink from './CategoryLink';
import { motion, Variants } from 'framer-motion';

const linkVariants: Variants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const CategoryLinkGroup = () => {
  return (
    <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
      <motion.div
        variants={linkVariants}
        className="flex justify-center items-center m-auto flex-wrap"
      >
        <div className="flex justify-center items-center">
          <CategoryLink category="한식" categoryEmoji="🥘" />
          <CategoryLink category="분식" categoryEmoji="🥟" />
          <CategoryLink category="일식" categoryEmoji="🍣" />
          <CategoryLink category="중식" categoryEmoji="🥠" />
        </div>
        <div className="flex">
          <CategoryLink category="양식" categoryEmoji="🍝" />
          <CategoryLink category="카페" categoryEmoji="🍰" />
          <CategoryLink category="디저트" categoryEmoji="🍰" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CategoryLinkGroup;
