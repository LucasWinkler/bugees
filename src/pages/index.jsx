import Head from 'next/head';
import Layout from '../layouts/Home';
import Hero from '../components/home/Hero';
import CTA from '../components/home/CTA';
import Contact from '../components/home/Contact';
import FAQ from '../components/home/FAQ';
import Features from '../components/home/Features';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Bugees</title>
      </Head>
      <Hero />
      <Button>This is a button</Button>
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
