import { useSession, getSession } from 'next-auth/react';
import AccountDropdown from '../../components/common/AccountDropdown';
import Layout from '../../layouts/Dashboard';

function Account() {
  const { data: session } = useSession();

  return (
    <>
      <h2>{session.user.name}</h2>
      <h1>Account Settings</h1>
      <AccountDropdown />
    </>
  );
}

export default Account;

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

Account.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
