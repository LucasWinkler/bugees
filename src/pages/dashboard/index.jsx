import { unstable_getServerSession } from 'next-auth/next';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Button from 'components/common/Button';
import ButtonOld from 'components/common/ButtonOld';
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
        <ButtonOld
          onClick={() => {
            router.push('/');
          }}>
          Home
        </ButtonOld>
        <ButtonOld
          onClick={() => {
            router.push('/dashboard/projects');
          }}>
          Projects
        </ButtonOld>
        <ButtonOld
          onClick={() => {
            router.push('/dashboard/bugs');
          }}>
          Bugs
        </ButtonOld>
        <p>Welcome, {session?.user.name}</p>

        <div className='separator' />
        <div className='h-full w-full py-12'>
          <div className='flex flex-wrap items-center justify-center gap-4 text-center'>
            <Button variant='primary'>Primary</Button>
            <Button variant='primary' modifier='outline'>
              Primary Outline
            </Button>
            <Button variant='monochrome'>Monochrome</Button>
            <Button variant='monochrome' modifier='outline'>
              Monochrome Outline
            </Button>
            <Button variant='monochrome' modifier='outline' loading>
              Monochrome Outline Loading
            </Button>
            <Button variant='secondary' modifier='plain'>
              Secondary Plain
            </Button>
            <Button variant='primary' modifier='plain'>
              Primary Plain
            </Button>
            <Button variant='destructive' modifier='plain'>
              Destructive Plain
            </Button>
            <Button variant='secondary' modifier='outline'>
              Secondary Outline
            </Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='destructive'>Destructive</Button>
            <Button variant='destructive' loading>
              Destructive Loading
            </Button>
            <Button>Default</Button>
            <Button modifier='plain'>Plain</Button>
            <Button modifier='plain' loading>
              Plain Loading
            </Button>
            <Button modifier='plain' disabled>
              Plain Disabled
            </Button>
            <Button modifier='outline'>Outline Default</Button>
            <Button fullWidth>Full Width Default</Button>
            <Button variant='monochrome' fullWidth>
              Full Width Monochrome
            </Button>
            <Button variant='destructive' modifier='outline'>
              Outline Destructive
            </Button>
            <Button
              variant='destructive'
              modifier='outline'
              loading
              disabled
              fullWidth>
              Full Width Destructive Outline Loading Disabled
            </Button>
          </div>
        </div>
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
