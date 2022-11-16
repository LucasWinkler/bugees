import { useSession, signIn, signOut } from 'next-auth/react';
import { Role } from '@prisma/client';

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>
          Welcome, ({session.user.role === Role.ADMIN ? 'Admin' : 'User'}){' '}
          {session.user.name}
        </p>
        <img
          referrerPolicy='no-referrer'
          src={session.user.image}
          alt='profile'
          style={{ width: '75px', borderRadius: '50px' }}
        />
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
