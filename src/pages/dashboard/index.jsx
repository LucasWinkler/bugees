import { unstable_getServerSession } from 'next-auth/next';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Button from 'components/common/Button';
import { Container } from 'components/common/Container';
import Layout from 'components/dashboard/Layout';
import seo from 'data/seo';
import { authOptions } from 'pages/api/auth/[...nextauth]';

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`Overview | ${seo.title}`}</title>
      </Head>

      <Container>
        <h1>Dashboard - Overview</h1>
        <Button
          onClick={() => {
            router.push('/');
          }}>
          Home
        </Button>
        <p>Welcome, {session?.user.name}</p>
      </Container>
    </>
  );
}

Dashboard.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};

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
