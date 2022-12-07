import { unstable_getServerSession } from 'next-auth/next';
import Head from 'next/head';

import seo from '@/data/seo';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { NextPageWithLayout } from '@/types/page';
import { GetServerSideProps } from 'next';
import { Role, User } from '@prisma/client';
import Layout from '@/components/dashboard/Layout';

interface UsersProps {
  users: User[];
}

const Users: NextPageWithLayout<UsersProps> = ({ users }) => {
  return (
    <>
      <Head>
        <title>{`Manage Users | ${seo.title}`}</title>
      </Head>

      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.role}
          </li>
        ))}
      </ul>
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

  const data = await prisma?.user.findMany();
  const users = JSON.parse(JSON.stringify(data));

  return {
    props: {
      session,
      users,
    },
  };
};

export default Users;
