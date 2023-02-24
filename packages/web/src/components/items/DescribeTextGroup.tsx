import React from 'react';
import DescribeText from './DescribeText';

interface Props {
  order: number;
}

const DescribeTextGroup = ({ order }: Props) => {
  const FIRST_PAGE = order === 1;

  return (
    <ul className="flex justify-between items-start mt-5 max-sm:w-[370px] w-[500px]">
      <DescribeText
        icon={FIRST_PAGE ? `chat` : `map`}
        describeTitle={FIRST_PAGE ? `공유하기` : `한눈에 보기`}
        describe={
          FIRST_PAGE
            ? `가족, 친구들과 맛집 리스트를 공유해요.`
            : `지도로 원하는 지역의 맛집을 한눈에 보세요.`
        }
        duration={1}
      />
      <DescribeText
        icon={FIRST_PAGE ? `search` : `bookmark`}
        describeTitle={FIRST_PAGE ? `탐색하기` : `찜하기`}
        describe={
          FIRST_PAGE
            ? `친구의 고향으로 여행을 갈 계획이 있다면, 친구가 인정한 맛집을 탐색해요.`
            : `흥미로운 곳은 먼저 "찜"해두고 천천히 고민하세요.`
        }
        duration={1.4}
      />
      <DescribeText
        icon={FIRST_PAGE ? `list` : `pin`}
        describeTitle={FIRST_PAGE ? `추가하기` : `현재 위치로 보기`}
        describe={
          FIRST_PAGE
            ? `내 입맛에 맞는다면, 리스트에 추가해요.`
            : `귀찮을 땐, 현재 내 위치 주변에 있는 맛집들을 누워서 둘러보세요.`
        }
        duration={1.6}
      />
    </ul>
  );
};

export default DescribeTextGroup;
