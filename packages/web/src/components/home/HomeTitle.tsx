import React from 'react';

interface Props {
  firstComment?: string;
  secondComment?: string;
}

const HomeTitle = ({ firstComment, secondComment }: Props) => {
  return (
    <div className="flex flex-col items-center max-lg:mt-32 [&>*]:leading-loose tracking-tighter text-black/80">
      <div className="flex shrink-0 text-5xl max-lg:text-3xl">{firstComment}</div>
      <div className="flex shrink-0 text-3xl">{secondComment}</div>
    </div>
  );
};

export default HomeTitle;
