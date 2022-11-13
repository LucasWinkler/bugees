import { Html, Head, Main, NextScript } from 'next/document';

import seo from '../util/Seo';

export default function Document() {
  return (
    <Html prefix='og: https://ogp.me/ns#'>
      <Head>
        <meta key='description' name='description' content={seo.description} />
        <meta key='charSet' charSet='utf-8' />
        <meta
          key='viewport'
          name='viewport'
          content='initial-scale=1.0, width=device-width'
        />
        <meta key='og_type' property='og:type' content={seo.openGraph.type} />
        <meta key='og_title' property='og:title' content={title} />
        <meta
          key='og_description'
          property='og:description'
          content={seo.openGraph.description}
        />
        <meta
          key='og_site_name'
          property='og:site_name'
          content={seo.openGraph.siteName}
        />
        <meta
          key='twitter:site'
          name='twitter:site'
          content={seo.twitter.site}
        />
        <meta
          key='twitter:creator'
          name='twitter:creator'
          content={seo.twitter.handle}
        />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
