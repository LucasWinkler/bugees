import navigationDrawerLinks from '@/data/navigationDrawerLinks';
import clsx from 'clsx';
import Link from 'next/link';
import Logo from '../common/Logo';

interface NavigationDrawerProps {
  className?: string;
}

const NavigationDrawer = ({ className }: NavigationDrawerProps) => {
  return (
    <aside className={clsx('border-r border-neutral-800', className)}>
      <nav className='flex flex-col py-6 px-6'>
        <Link
          className='py-6 text-white transition-colors duration-300 hover:text-green-400'
          href='/dashboard'>
          <span className='sr-only'>Bugees</span>
          <Logo className='mx-auto h-6 w-auto sm:h-7' />
        </Link>
        <ul className='mt-6 flex flex-col gap-4'>
          {navigationDrawerLinks.map(link => (
            <li
              className='block rounded px-4 py-4 text-sm font-medium text-neutral-300 hover:bg-neutral-900 hover:text-white'
              key={link.href}>
              <Link
                className='flex items-center gap-3 text-left'
                href={link.href}>
                <>
                  {<link.icon className='h-5 w-auto' />}
                  {link.name}
                </>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default NavigationDrawer;
