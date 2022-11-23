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
        <meta key='og_type' property='og:type' content={seo.openGraph.type} />
        <meta
          key='og_image'
          property='og:image'
          content={seo.openGraph.image.url}
        />
        <meta
          key='og_image_width'
          property='og:image:width'
          content={seo.openGraph.image.width}
        />
        <meta
          key='og_image_height'
          property='og:image:height'
          content={seo.openGraph.image.height}
        />
        <meta
          key='twitter_site'
          name='twitter:site'
          content={seo.twitter.site}
        />
        <meta
          key='twitter_creator'
          name='twitter:creator'
          content={seo.twitter.handle}
        />
        <meta
          key='twitter_card'
          name='twitter:card'
          content='summary_large_image'
        />
        <link rel='icon' href='/favicon.svg' />
        <meta
          name='google-site-verification'
          content='-XwKpcZoOCHdpTSfmwxdZQ9DY60vqyJGTS7qE2iwJpY'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
