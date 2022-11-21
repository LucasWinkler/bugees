import { authOptions } from './api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';

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

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  return {
    props: {
      session,
    },
  };
}

Home.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
