import navigationDrawerLinks from '@/data/navigationDrawerLinks';
import { Role } from '@prisma/client';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../common/Logo';

interface NavigationDrawerProps {
  className?: string;
}

const NavigationDrawer = ({ className }: NavigationDrawerProps) => {
  const router = useRouter();
  const { data: session } = useSession();

  const isActive = (href: string) => router.pathname === href;
  const isAdmin: boolean = session?.user.role === Role.ADMIN;

  return (
    <aside className={clsx('border-r border-neutral-800', className)}>
      <nav className='flex flex-col px-6'>
        <Link
          className='pb-6 pt-9 text-white transition-colors duration-300 hover:text-green-400'
          href='/dashboard'>
          <span className='sr-only'>Bugees</span>
          <Logo className='h-6 w-auto px-4 sm:h-7' />
        </Link>
        <div className='separator'></div>
        <ul className='flex flex-col gap-2'>
          {navigationDrawerLinks.primary.map(link => (
            <li
              className={clsx(
                'block rounded text-sm font-medium hover:bg-neutral-800',
                isActive(link.href) ? 'text-green-500' : 'text-neutral-300'
              )}
              key={link.href}>
              <Link
                className='flex items-center gap-3 px-4 py-4 text-left'
                href={link.href}>
                <>
                  {<link.icon className='h-5 w-auto' />}
                  {link.name}
                </>
              </Link>
            </li>
          ))}
        </ul>
        {isAdmin && (
          <>
            <div className='separator'></div>
            {navigationDrawerLinks.admin.map(link => (
              <li
                className={clsx(
                  'block rounded text-sm font-medium hover:bg-neutral-800',
                  isActive(link.href) ? 'text-green-500' : 'text-neutral-300'
                )}
                key={link.href}>
                <Link
                  className='flex items-center gap-3 px-4 py-4 text-left'
                  href={link.href}>
                  <>
                    {<link.icon className='h-5 w-auto' />}
                    {link.name}
                  </>
                </Link>
              </li>
            ))}
          </>
        )}
        <div className='separator'></div>
        {navigationDrawerLinks.secondary.map(link => (
          <li
            className={clsx(
              'block rounded text-sm font-medium hover:bg-neutral-800',
              link.name === 'Sign out'
                ? 'text-red-500 opacity-95'
                : 'text-neutral-300'
            )}
            key={link.href}>
            <Link
              className='flex items-center gap-3 px-4 py-4 text-left'
              href={link.href}>
              <>
                {<link.icon className='h-5 w-auto' />}
                {link.name}
              </>
            </Link>
          </li>
        ))}
      </nav>
    </aside>
  );
};

export default NavigationDrawer;
