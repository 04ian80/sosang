import '../styles/globals.css';
import '../tailwind.css';
import { SessionProvider } from 'next-auth/react';
import { HeadBar } from '../components/base/HeadBar';
import type { Session } from 'next-auth';
import type { AppProps } from 'next/app';

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <HeadBar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
