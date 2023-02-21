import React from 'react';

interface Props {
  order: number;
  children: JSX.Element;
}

const HomeLayout = ({ order, children }: Props) => {
  const THIRD_PAGE = order === 3;

  return (
    <section
      className={`snap-center h-screen p-5 even:bg-brandGreen-800/30 odd:bg-zinc-100 odd:text-brandGreen-900  max-lg:pt-32`}
    >
      <div
        className={`-z-10 flex max-lg:flex-col ${
          THIRD_PAGE ? `justify-start` : `justify-between`
        } items-center font-semibold h-full max-w-[1024px] mx-auto`}
      >
        {children}
      </div>
    </section>
  );
};

export default HomeLayout;
