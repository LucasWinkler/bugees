import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme.js';
import Globals from '../styles/globals';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || (page => page);

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <Globals />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </SessionProvider>
  );
}
