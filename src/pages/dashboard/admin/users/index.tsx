import { unstable_getServerSession } from 'next-auth/next';
import Head from 'next/head';

import seo from '@/data/seo';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { NextPageWithLayout } from '@/types/page';
import { GetServerSideProps } from 'next';
import { Role } from '@prisma/client';
import Layout from '@/components/dashboard/Layout';
import prisma from '@/lib/prismadb';
import UsersTable from '@/components/dashboard/UsersTable';

type UserProps = {
  id: string;
  name: string;
  email: string;
  role: Role;
  createdAt: Date;
};

const Users: NextPageWithLayout<{ users: UserProps[] }> = ({ users }) => {
  return (
    <>
      <Head>
        <title>{`Manage Users | ${seo.title}`}</title>
      </Head>

      <UsersTable users={users} />
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

  const data = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });

  const users = JSON.parse(JSON.stringify(data));

  return {
    props: {
      session,
      users,
    },
  };
};

export default Users;
