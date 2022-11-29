import '../styles/globals.css';
import '../tailwind.css';
import { SessionProvider } from 'next-auth/react';
import { HeadBar } from '../components/base/HeadBar';
import type { Session } from 'next-auth';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';

const gmarket = localFont({
  src: [
    {
      path: './fonts/GmarketSansLight.otf',
      weight: '300',
    },
    {
      path: './fonts/GmarketSansMedium.otf',
      weight: '500',
    },
    {
      path: './fonts/GmarketSansBold.otf',
      weight: '700',
    },
  ],
});

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <main className={`${gmarket.className}`}>
        <HeadBar />
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}

export default MyApp;
