import Head from 'next/head';
import Layout from '../layout/HomeLayout';
import HomeContainer from '../components/HomeContainer';
import HomeHero from '../components/HomeHero';
import HomeCTA from '../components/HomeCTA';
import HomeContact from '../components/HomeContact';
import HomeFAQ from '../components/HomeFAQ';
import HomeFeatures from '../components/HomeFeatures';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Bugees</title>
      </Head>

      <HomeHero />
      <HomeFeatures />
      <HomeCTA />
      <HomeFAQ />
      <HomeContact />
    </>
  );
}

Home.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
