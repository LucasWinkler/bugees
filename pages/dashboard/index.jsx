import Head from 'next/head';
import Layout from '../../layout/DashboardLayout';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Bugees | Dashboard</title>
        <meta
          name='description'
          content='Your personal bug tracker that allows you to efficiently hunt down those pesky bugs.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>Dashboard</h1>
    </>
  );
}

Dashboard.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
