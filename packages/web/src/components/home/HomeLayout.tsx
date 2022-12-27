import React from 'react';

interface Props {
  order: number;
  children: JSX.Element;
}

const HomeLayout = ({ order, children }: Props) => {
  const FIRST_TWO_PAGE = order === 1 || order === 2;

  return (
    <section
      className={`snap-center h-screen p-5 even:bg-brandGreen-800/30 odd:bg-zinc-100 odd:text-brandGreen-900`}
    >
      <div
        className={`-z-10 flex max-lg:flex-col ${
          FIRST_TWO_PAGE ? `justify-between` : `justify-start`
        } items-center font-semibold h-full max-w-[1024px] mx-auto`}
      >
        {children}
      </div>
    </section>
  );
};

export default HomeLayout;
