import { unstable_getServerSession } from 'next-auth/next';
import Head from 'next/head';

import seo from '@/data/seo';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { NextPageWithLayout } from '@/types/page';
import { GetServerSideProps } from 'next';
import { Role } from '@prisma/client';
import Layout from '@/components/dashboard/Layout';

const Users: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>{`Manage Users | ${seo.title}`}</title>
      </Head>

      <div>
        List of users with ability to change their account details but more
        specifically their roles.
      </div>
    </>
  );
};

Users.getLayout = function (page) {
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

  return {
    props: {
      session,
    },
  };
};

export default Users;
