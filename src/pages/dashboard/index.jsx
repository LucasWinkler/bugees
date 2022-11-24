import Head from 'next/head';
import Layout from '../../layouts/Dashboard';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Button from '../../components/common/Button';
import AvatarMenu from '../../components/common/AvatarMenu';
import { authOptions } from '../api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Overview | Bugees</title>
      </Head>

      <h1>Dashboard - Overview</h1>
      <AvatarMenu />
      <Button
        onClick={() => {
          router.push('/');
        }}>
        Home
      </Button>
      <p>Welcome, {session?.user.name}</p>
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
}

Dashboard.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
