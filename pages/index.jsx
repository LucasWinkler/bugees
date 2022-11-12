import Head from 'next/head';
import Link from 'next/link';
import Layout from '../layout/HomeLayout';
import HomeContainer from '../components/HomeContainer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bugees | Home</title>
        <meta
          name='description'
          content='Your personal bug tracker that allows you to efficiently hunt down those pesky bugs.'
        />
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <HomeContainer>
        <h1>
          Your new best friend that will help you track down those pesky bugs.
        </h1>
        <Link href='/dashboard'>Get work done faster</Link>
      </HomeContainer>
    </>
  );
}

Home.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
