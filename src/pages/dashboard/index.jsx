import Head from 'next/head';
import Layout from '../../layouts/Dashboard';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Overview | Bugees</title>
      </Head>

      <h1>Dashboard - Overview</h1>
    </>
  );
}

Dashboard.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
