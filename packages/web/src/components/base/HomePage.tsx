import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import React from 'react';
import HomeItem from '../home/HomeItem';

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <div className="snap-y snap-mandatory">
      <HomeItem
        layoutMode="divided"
        keyword="friend-recommand"
        firstComment="친구들이 인정한 맛집,"
        secondComment="나도 다녀와 볼래!"
        link="/place/friend"
        linkTitle="친구가 인정한 맛집 보러가기"
        order={1}
      />
      <HomeItem
        layoutMode="divided"
        keyword="search-by-map"
        firstComment="골목 어딘가에 숨어있는 맛집,"
        secondComment="지도에서 찾아보세요"
        link="/map"
        linkTitle="지도로 보기"
        order={2}
      />
      <HomeItem
        firstComment="세상은 넓고 먹을 건 많다!"
        layoutMode="full"
        keyword="category"
        link="/category"
        linkTitle="카테고리로 보기"
        order={3}
      />
      <HomeItem order={4} layoutMode="table" keyword="current-location" />
      <motion.div
        className="fixed left-0 right-0 top-[58px] h-3 bg-brandYellow-200"
        style={{ scaleX }}
      />
    </div>
  );
};

export default HomePage;
