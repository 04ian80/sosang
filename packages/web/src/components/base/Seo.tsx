import React from 'react';
import Head from 'next/head';

type Meta = {
  title: string;
  content: string;
};

const Seo = ({ title, content }: Meta) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={content} />
      <link rel='icon' href='/sosang.png' />
    </Head>
  );
};

export default Seo;
