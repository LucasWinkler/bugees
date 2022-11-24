import { useSession } from 'next-auth/react';
import AvatarMenu from '../../components/common/AvatarMenu';
import Layout from '../../layouts/Dashboard';
import { authOptions } from '../api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';

export default function Account() {
  const { data: session } = useSession();

  return (
    <>
      <h2>{session.user.name}</h2>
      <h1>Account Settings</h1>
      <AvatarMenu />
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
