import Head from 'next/head';
import Layout from '../../layouts/Dashboard';
import { useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Button from '../../components/common/Button';

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Overview | Bugees</title>
      </Head>

      <h1>Dashboard - Overview</h1>
      <Button
        onClick={() => {
          router.push('/');
        }}>
        Home
      </Button>
      <p>Welcome, {session.user.name}</p>
    </>
  );
}

export const getServerSideProps = async context => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
      },
    };
  }
  return {
    props: { session },
  };
};

Dashboard.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
