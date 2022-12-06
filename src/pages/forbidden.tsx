import Layout from '@/components/dashboard/Layout';
import { NextPageWithLayout } from '@/types/page';
import { GetServerSideProps } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

const Forbidden: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Forbidden</h1>
      <p>You do not have permission to access this.</p>
    </div>
  );
};

Forbidden.getLayout = function (page) {
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
};

export default Forbidden;
