import Link from 'next/link';

import Logo from '@/components/common/Logo';
import Container from '@/components/common/Container';

const Footer = () => {
  return (
    <footer className='py-8 md:py-10 lg:py-12'>
      <Container>
        <div className='flex flex-col items-center justify-center gap-4'>
          <a
            className='text-white transition-colors duration-300 hover:text-green-400'
            href='#'>
            <span className='sr-only'>Bugees</span>
            <Logo className='h-7 w-auto sm:h-12' />
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            className='transition-colors duration-300 hover:text-gray-100'
            href='https://www.lucaswinkler.dev/'>
            Created by Lucas Winkler
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
