import Head from 'next/head';
import Layout from '../layouts/Home';
import Hero from '../components/home/Hero';
import CTA from '../components/home/CTA';
import Contact from '../components/home/Contact';
import FAQ from '../components/home/FAQ';
import Features from '../components/home/Features';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Bugees</title>
      </Head>
      <Hero />
      <Features />
      <CTA />
      <FAQ />
      <Contact />
    </>
  );
}

Home.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
