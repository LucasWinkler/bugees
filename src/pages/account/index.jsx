import { useSession } from 'next-auth/react';
import { authOptions } from '../api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';
import Layout from '../../components/layouts/Account';

export default function Account() {
  const { data: session } = useSession();

  return (
    <>
      <h2>
        {session.user.name} {session.user.email}
      </h2>
      <h1>Account Settings</h1>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=/account`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

Account.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
