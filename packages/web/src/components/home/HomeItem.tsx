import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import HomeLayout from '../home/HomeLayout';
import DescribeText from '../items/DescribeText';
import DescribeTextGroup from '../items/DescribeTextGroup';
import CategoryLinkGroup from './CategoryLinkGroup';
import HomeLinkButton from './HomeLinkButton';
import HomeTitle from './HomeTitle';
import HomeTitleImage from './HomeTitleImage';

interface Props {
  layoutMode: 'divided' | 'full' | 'table';
  keyword: 'friend-recommand' | 'search-by-map' | 'category' | 'current-location';
  firstComment?: string;
  secondComment?: string;
  link?: string;
  linkTitle?: string;
  order: number;
}

const HomeItem = ({
  layoutMode,
  keyword,
  firstComment,
  secondComment,
  link,
  linkTitle,
  order,
}: Props) => {
  const FREIND_RECOMMAND = keyword === 'friend-recommand';
  const SEARCH_BY_MAP = keyword === 'search-by-map';

  if (layoutMode === 'full') {
    return (
      <HomeLayout order={order}>
        <>
          <div className="flex flex-col items-center">
            <HomeTitle firstComment={firstComment} secondComment={secondComment} />
            <CategoryLinkGroup />
          </div>
          <div className={`flex items-end text-2xl`}>
            <HomeLinkButton link={link} linkTitle={linkTitle} SEARCH_BY_MAP={SEARCH_BY_MAP} />
          </div>
        </>
      </HomeLayout>
    );
  }

  if (layoutMode === 'table') {
    return (
      <HomeLayout order={order}>
        <></>
      </HomeLayout>
    );
  }

  return (
    <HomeLayout order={order}>
      <>
        <div className="flex flex-col justify-start items-center">
          <HomeTitle firstComment={firstComment} secondComment={secondComment} />
          <DescribeTextGroup order={order} />
        </div>
        <div className={`flex min-lg:flex-col justify-between items-start min-h-[400px] text-2xl`}>
          <HomeTitleImage FREIND_RECOMMAND={FREIND_RECOMMAND} SEARCH_BY_MAP={SEARCH_BY_MAP} />
          <HomeLinkButton link={link} linkTitle={linkTitle} SEARCH_BY_MAP={SEARCH_BY_MAP} />
        </div>
      </>
    </HomeLayout>
  );
};

export default HomeItem;
