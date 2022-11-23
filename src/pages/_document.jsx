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
          key='og_image_alt'
          property='og:image:alt'
          content={seo.openGraph.image.alt}
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
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#188c1b' />
        <meta name='msapplication-TileColor' content='#188c1b' />
        <meta name='theme-color' content='#188c1b' />
        <link rel='manifest' href='/site.webmanifest' />
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
