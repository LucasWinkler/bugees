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

      <section>
        <HomeContainer>
          <h1>
            Your new best friend that will help you track down those pesky bugs.
          </h1>
          <Link href='/dashboard'>Get work done faster</Link>
        </HomeContainer>
      </section>

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

      <section>
        <HomeContainer>
          <h2>Contact</h2>
          <p>hello@lucaswinkler.dev</p>
        </HomeContainer>
      </section>
    </>
  );
}

Home.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
