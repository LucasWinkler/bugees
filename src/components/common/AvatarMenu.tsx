import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, PowerIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

import defaultProfileImage from '../../../public/images/default-profile-image.png';
import avatarMenuLinks from '@/data/avatarMenuLinks';
import titleCase from '@/util/titleCase';

const AvatarMenu = () => {
  const { data: session, status } = useSession();

  if (status !== 'authenticated') {
    return null;
  }

  const userAvatar = session.user.image || defaultProfileImage;

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <>
        <Menu.Button className='group flex items-center justify-center gap-1'>
          <span className='sr-only'>Open user menu</span>
          <div className='flex overflow-hidden rounded-full bg-gray-800 text-sm transition duration-200 ease-in focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-gray-800 group-hover:outline-none group-hover:ring-2 group-hover:ring-green-300 group-hover:ring-offset-2 group-hover:ring-offset-gray-800'>
            <Image
              className='h-8 w-8 rounded-full transition-transform delay-75 duration-[400ms] group-hover:scale-[1.18] xs:h-9 xs:w-9'
              referrerPolicy='no-referrer'
              src={userAvatar}
              alt={`${session.user.name} profile image`}
              width={100}
              height={100}
              priority
            />
          </div>
          <ChevronDownIcon className='h-6 w-6 text-neutral-300 transition duration-200 ease-in group-hover:text-neutral-100' />
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
        <Menu.Items className='absolute right-0 z-10 mt-4 min-w-[12rem] origin-top-right whitespace-nowrap rounded-md border border-neutral-700 bg-neutral-900 p-2 focus:outline-none'>
          <Menu.Item disabled>
            {() => (
              <>
                <div className='mr-4 flex items-center py-2'>
                  <div className='ml-4 mr-3'>
                    <Image
                      className='max-h-[2.5rem] min-h-[2.5rem] min-w-[2.5rem] max-w-[2.5rem] rounded-full'
                      referrerPolicy='no-referrer'
                      src={userAvatar}
                      alt='profile'
                      width={100}
                      height={100}
                      priority
                    />
                  </div>
                  <div className='text-sm'>
                    <div className='font-semibold text-neutral-300'>
                      {session.user.name}
                    </div>
                    <div className='text-neutral-400'>
                      {titleCase(session.user.role)}
                    </div>
                  </div>
                </div>
              </>
            )}
          </Menu.Item>
          <div className='separator'></div>
          {avatarMenuLinks.primary.map(link => (
            <Menu.Item key={link.name}>
              {({ active }) => (
                <Link
                  className={clsx(
                    active ? 'bg-neutral-800' : '',
                    'block rounded px-4 py-2 text-sm text-neutral-300'
                  )}
                  href={link.href}>
                  <div className='flex items-center gap-2'>
                    <link.icon className='h-[1.15rem] w-auto' />
                    {link.name}
                  </div>
                </Link>
              )}
            </Menu.Item>
          ))}
          <div className='separator'></div>
          {avatarMenuLinks.secondary.map(link => (
            <Menu.Item key={link.name}>
              {({ active }) => (
                <Link
                  className={clsx(
                    active ? 'bg-neutral-800' : '',
                    'block rounded px-4 py-2 text-sm text-neutral-300'
                  )}
                  href={link.href}>
                  <div className='flex items-center gap-2'>
                    <link.icon className='h-[1.15rem] w-auto' />
                    {link.name}
                  </div>
                </Link>
              )}
            </Menu.Item>
          ))}
          <Menu.Item>
            {({ active }) => (
              <button
                className={clsx(
                  active ? 'bg-neutral-800' : '',
                  'block w-[100%] rounded px-4 py-2 text-sm text-red-500 opacity-95'
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
