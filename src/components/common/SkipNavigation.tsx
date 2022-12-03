import Link from 'next/link';

const SkipNavigation = () => {
  return (
    <Link
      href='#main-content'
      className='sr-only block bg-neutral-800 text-center text-white focus:not-sr-only'>
      Skip to content
    </Link>
  );
};

export default SkipNavigation;
