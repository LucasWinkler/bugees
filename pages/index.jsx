import Head from 'next/head';
import Layout from '../layout/HomeLayout';
import HomeContainer from '../components/HomeContainer';
import HomeHero from '../components/HomeHero';
import HomeCTA from '../components/HomeCTA';
import HomeContact from '../components/HomeContact';

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

      <HomeHero />

      <section>
        <HomeContainer>
          <h2>Features</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
            praesentium!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
            praesentium!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
            praesentium!
          </p>
        </HomeContainer>
      </section>

      <HomeCTA />

      <section>
        <HomeContainer>
          <h2>Frequently Asked Questions</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
            praesentium!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
            praesentium!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
            praesentium!
          </p>
        </HomeContainer>
      </section>

      <HomeContact />
    </>
  );
}

Home.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
