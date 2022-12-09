import { unstable_getServerSession } from 'next-auth/next';
import Head from 'next/head';

import seo from '@/data/seo';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { NextPageWithLayout } from '@/types/page';
import { GetServerSideProps } from 'next';
import { Role } from '@prisma/client';
import Layout from '@/components/dashboard/Layout';
import prisma from '@/lib/prismadb';
import Title from '@/components/dashboard/Title';

const Bugs: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>{`Bugs | ${seo.title}`}</title>
      </Head>

      <Title>Bugs</Title>
      <p>Show table with bugs</p>
      <p>
        Bugs will be from all projects that the user is in. Can be filtered by
        bugs the user has created, is assinged to, or some other options. Could
        get complex going to keep it simple to start.
      </p>
    </>
  );
};

Bugs.getLayout = function (page) {
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

  if (session.user.role !== Role.ADMIN) {
    return {
      redirect: {
        destination: `/forbidden`,
        permanent: false,
      },
    };
  }

  const data = await prisma.bug.findMany();

  const bugs = JSON.parse(JSON.stringify(data));

  return {
    props: {
      session,
      bugs,
    },
  };
};

export default Bugs;
