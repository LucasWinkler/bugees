import Head from 'next/head';

import Layout from '../layout/HomeLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bugees</title>
        <meta
          name='description'
          content='Your personal bug tracker that allows you to efficiently hunt down those pesky bugs.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Landing page</h1>
    </>
  );
}

Home.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
