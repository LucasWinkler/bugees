import { unstable_getServerSession } from 'next-auth';
import Head from 'next/head';

import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import CallToAction from 'components/home/CallToAction';
import FAQ from 'components/home/FAQ';
import Features from 'components/home/Features';
import Hero from 'components/home/Hero';
import Layout from 'components/home/Layout';
import OutlineButton from 'components/home/OutlineButton';
import seo from 'data/seo';
import { authOptions } from './api/auth/[...nextauth]';

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Home | ${seo.title}`}</title>
      </Head>

      <Hero />
      <Features />
      <CallToAction
        id='call-to-action'
        title="What are you waiting for? It's free!">
        <OutlineButton href='/dashboard'>
          Get work done faster
          <ArrowLongRightIcon className='h-8 w-8' />
        </OutlineButton>
      </CallToAction>
      <FAQ />
      <CallToAction id='contact' title='Got any more questions?'>
        <OutlineButton href='mailto:hello@lucaswinkler.dev'>
          hello@lucaswinkler.dev
        </OutlineButton>
      </CallToAction>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

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
