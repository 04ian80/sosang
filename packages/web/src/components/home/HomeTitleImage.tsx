import React from 'react';
import { motion, Variants } from 'framer-motion';

interface Props {
  FREIND_RECOMMAND: boolean;
  SEARCH_BY_MAP: boolean;
}

const linkVariants: Variants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 1,
    },
  },
};

const HomeTitleImage = ({ FREIND_RECOMMAND, SEARCH_BY_MAP }: Props) => {
  return (
    <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
      <motion.div className="relative max-lg:hidden" variants={linkVariants}>
        {FREIND_RECOMMAND && (
          <img src="/mainPageImg1.png" alt="친구들이 인정한 맛집 이미지" width={300} height={300} />
        )}
        {SEARCH_BY_MAP && (
          <div className="-translate-y-[100px]">
            <img
              className="rounded-xl"
              src="/mainPageImg2-1.png"
              alt="지도로 모아보는 맛집 이미지"
              width={200}
              height={200}
            />
            <img
              className="absolute right-20 top-20 rounded-xl"
              src="/mainPageImg2-2.png"
              alt="지도로 모아보는 맛집 이미지"
              width={200}
              height={200}
            />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default HomeTitleImage;
