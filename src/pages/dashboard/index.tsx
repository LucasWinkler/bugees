import { unstable_getServerSession } from 'next-auth/next';
import Head from 'next/head';

import Layout from '@/components/dashboard/Layout';
import seo from '@/data/seo';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { NextPageWithLayout } from '@/types/page';
import { GetServerSideProps } from 'next';
import Title from '@/components/dashboard/Title';

const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>{`Overview | ${seo.title}`}</title>
      </Head>

      <Title>Overview</Title>
      <p>Charts and stuff eventually...</p>
    </>
  );
};

Dashboard.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=/dashboard`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default Dashboard;
