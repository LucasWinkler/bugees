import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../../common/ThemeToggle';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <header>
      <div>
        <nav>
          <Link href='/'>
            <Image
              src='/images/bugees-logo-white.svg'
              alt='bugees logo'
              width='119'
              height='38'
              priority
            />
          </Link>
          <ul>
            <li>
              <Link scroll={false} href='#features'>
                Features
              </Link>
            </li>
            <li>
              <Link scroll={false} href='#faq'>
                FAQ
              </Link>
            </li>
            <li>
              <Link scroll={false} href='#contact'>
                Contact
              </Link>
            </li>
          </ul>
          <div>
            {status === 'authenticated' && (
              <>
                <h2 style={{ color: 'blue' }}>Welcome, {session.user.name}</h2>
                <button onClick={() => signOut()}>Sign Out</button>
                <img
                  referrerPolicy='no-referrer'
                  src={session.user.image}
                  alt='profile'
                  style={{
                    border: '5px solid blue',
                    width: '75px',
                    borderRadius: '50px',
                  }}
                />
              </>
            )}

            {status === 'unauthenticated' && (
              <>
                <h2 style={{ color: 'red' }}>Not Authenticated</h2>
                <button onClick={() => signIn()}>Sign In</button>
              </>
            )}
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
