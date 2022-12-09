import { unstable_getServerSession } from 'next-auth/next';
import Head from 'next/head';

import Layout from '@/components/dashboard/Layout';
import seo from '@/data/seo';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { NextPageWithLayout } from '@/types/page';
import { GetServerSideProps } from 'next';
import Title from '@/components/dashboard/Title';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const defaultProfileImage = '/images/default-profile-image.png';

const Settings: NextPageWithLayout = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const userAvatar = session?.user.image || defaultProfileImage;

  return (
    <>
      <Head>
        <title>{`Account Settings | ${seo.title}`}</title>
      </Head>

      <Title>Account Settings</Title>
      <div>
        <Image
          className='h-[4rem] w-auto rounded-full'
          referrerPolicy='no-referrer'
          src={userAvatar}
          alt='profile'
          width={100}
          height={100}
          priority
        />
      </div>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
    </>
  );
};

Settings.getLayout = function (page) {
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

export default Settings;
