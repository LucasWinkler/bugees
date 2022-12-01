import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';

import AvatarMenu from '@/components/common/AvatarMenu';
import { Container } from '@/components/common/Container';
import Logo from '@/components/common/Logo';

const Header = () => {
  const { data: session, status } = useSession();

  return (
    <>
      <header className='py-4 sm:py-5'>
        <Container>
          <nav className='flex items-center justify-between text-white'>
            <Link
              className='text-white transition-colors duration-300 hover:text-green-400'
              href='/'>
              <span className='sr-only'>Bugees</span>
              <Logo className='h-6 w-auto sm:h-7' />
            </Link>
            <div className='flex items-center justify-between gap-0 sm:gap-1'>
              {status === 'authenticated' ? (
                <>
                  <Link
                    className='group hidden py-2 px-2 text-sm text-neutral-300 transition-colors duration-300 hover:text-neutral-100 xs:block sm:text-[0.9375rem]'
                    href='/dashboard'>
                    Dashboard
                  </Link>
                  <AvatarMenu />
                </>
              ) : (
                <>
                  <button
                    className='group inline-flex items-center gap-2 rounded py-2 text-sm text-neutral-300 transition-colors duration-300 hover:text-neutral-100 sm:text-[0.9375rem]'
                    onClick={() => signIn()}>
                    <ArrowRightOnRectangleIcon className='h-6 w-6' />
                    Sign In
                  </button>
                </>
              )}
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default Header;
