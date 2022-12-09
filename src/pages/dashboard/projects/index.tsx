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

const Projects: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>{`Projects | ${seo.title}`}</title>
      </Head>

      <Title>Projects</Title>
      <p>Show table with projects</p>
      <p>
        Need to be able to sort by a lot of different options. Could get
        complex.
      </p>
    </>
  );
};

Projects.getLayout = function (page) {
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

  const data = await prisma.project.findMany();

  const projects = JSON.parse(JSON.stringify(data));

  return {
    props: {
      session,
      projects,
    },
  };
};

export default Projects;
