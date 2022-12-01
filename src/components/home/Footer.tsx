import Link from 'next/link';

import Logo from '@/components/common/Logo';

const Footer = () => {
  return (
    <footer className='mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-10 lg:px-8 lg:py-12'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <Link
          className='text-white transition-colors duration-300 hover:text-green-400'
          href='/'>
          <span className='sr-only'>Bugees</span>
          <Logo className='h-7 w-auto sm:h-12' />
        </Link>
        <Link
          className='transition-colors duration-300 hover:text-gray-100'
          href='https://www.lucaswinkler.dev/'>
          Created by Lucas Winkler
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
