import Head from 'next/head';
import Layout from '../../layouts/Dashboard';
import { useSession, getSession } from 'next-auth/react';

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Overview | Bugees</title>
      </Head>

      <h1>Dashboard - Overview</h1>
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
