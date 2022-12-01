import { unstable_getServerSession } from 'next-auth/next';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from '@/components/account/Layout';
import { Container } from '@/components/common/Container';
import seo from '@/data/seo';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Button from '@/components/common/Button';
import { NextPageWithLayout } from '@/types/page';
import { GetServerSideProps } from 'next';

export const Account: NextPageWithLayout = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`Account Settings | ${seo.title}`}</title>
      </Head>

      <Container>
        <h1>Account Settings</h1>
        <Button variant='primary' href='/'>
          Home
        </Button>
        <Button variant='secondary' onClick={() => router.push('/dashboard')}>
          Dashboard
        </Button>
        <p>Welcome, {session?.user.name}</p>
      </Container>
    </>
  );
};

Account.getLayout = function (page) {
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
};

export default Account;
