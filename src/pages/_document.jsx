import { Html, Head, Main, NextScript } from 'next/document';

import seo from '../data/seo';

export default function Document() {
  return (
    <Html prefix='og: https://ogp.me/ns#'>
      <Head>
        <meta key='description' name='description' content={seo.description} />
        <meta key='og_type' property='og:type' content={seo.openGraph.type} />
        <meta
          key='og_title'
          property='og:title'
          content={seo.openGraph.title}
        />
        <meta
          key='og_description'
          property='og:description'
          content={seo.openGraph.description}
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
        <meta
          key='twitter:card'
          name='twitter:card'
          content='summary_large_image'
        />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
