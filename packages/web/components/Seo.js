import Head from 'next/head';

export default function Seo({ title, content }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={content} />
      <link rel='icon' href='/sosang.png' />
    </Head>
  );
}
