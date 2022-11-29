import { unstable_getServerSession } from 'next-auth/next';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from 'components/account/Layout';
import seo from 'data/seo';
import Button from '../../components/common/Button';
import { authOptions } from '../api/auth/[...nextauth]';

export default function Account() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`Account Settings | ${seo.title}`}</title>
      </Head>

      <h1>Account Settings</h1>
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

Account.getLayout = function (page) {
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
