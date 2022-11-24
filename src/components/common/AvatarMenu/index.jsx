import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { AvatarMenuLinks } from '../../../data/navLinks';
import classNames from '../../../util/joinClassNames';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { PowerIcon } from '@heroicons/react/24/outline';

const AvatarMenu = () => {
  const { data: session, status } = useSession();

  if (status !== 'authenticated') {
    return null;
  }

  return (
    <Menu as='div' className='relative ml-3'>
      <>
        <Menu.Button className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-gray-800   hover:outline-none hover:ring-2 hover:ring-green-300 hover:ring-offset-2 hover:ring-offset-gray-800 transition duration-200 overflow-hidden ease-in'>
          <span className='sr-only'>Open user menu</span>
          <Image
            className='rounded-full h-8 w-8 xs:h-10 xs:w-10 md:h-12 md:w-12 hover:scale-[1.18] transition-transform duration-[400ms] delay-75'
            referrerPolicy='no-referrer'
            src={session.user.image}
            alt='profile'
            width={100}
            height={100}
            priority
          />
        </Menu.Button>
      </>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'>
        <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-neutral-900 p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-neutral-700'>
          {AvatarMenuLinks.map(link => (
            <Menu.Item key={link.name}>
              {({ active }) => (
                <Link
                  className={classNames(
                    active ? 'bg-neutral-800' : '',
                    'block px-4 py-2 text-sm text-neutral-300 rounded'
                  )}
                  href={link.href}>
                  <div className='flex items-center gap-2'>
                    <link.icon className='h-5 w-5' />
                    {link.name}
                  </div>
                </Link>
              )}
            </Menu.Item>
          ))}
          <div className='separator'></div>
          <Menu.Item>
            {({ active }) => (
              <button
                className={classNames(
                  active ? 'bg-neutral-800' : '',
                  'block px-4 py-2 text-sm text-red-500 opacity-95 rounded w-[100%] text-left'
                )}
                onClick={() => signOut()}>
                <div className='flex items-center gap-2'>
                  <PowerIcon className='h-5 w-5' />
                  Sign Out
                </div>
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default AvatarMenu;
