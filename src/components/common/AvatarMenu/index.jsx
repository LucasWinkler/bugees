import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { AvatarMenuLinks } from '../../../data/navLinks';
import classNames from '../../../util/joinClassNames';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { PowerIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import titleCase from '../../../util/titleCase';

const AvatarMenu = () => {
  const { data: session, status } = useSession();

  if (status !== 'authenticated') {
    return null;
  }

  const profileImage = session.user.image;

  return (
    <Menu as='div' className='relative m-1 inline-block text-left'>
      <>
        <Menu.Button className='group flex items-center justify-center gap-1'>
          <span className='sr-only'>Open user menu</span>
          <div className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-gray-800 group-hover:outline-none group-hover:ring-2 group-hover:ring-green-300 group-hover:ring-offset-2 group-hover:ring-offset-gray-800 transition duration-200 overflow-hidden ease-in'>
            <Image
              className='rounded-full h-8 w-8 xs:h-9 xs:w-9 group-hover:scale-[1.18] transition-transform duration-[400ms] delay-75'
              referrerPolicy='no-referrer'
              src={profileImage}
              alt={`${session.user.name} profile image`}
              width={100}
              height={100}
              priority
            />
          </div>
          <ChevronDownIcon className='text-neutral-300 group-hover:text-neutral-100 transition duration-200 ease-in h-6 w-6' />
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
        <Menu.Items className='absolute whitespace-nowrap right-0 z-10 mt-4 min-w-[12rem] origin-top-right rounded-md bg-neutral-900 p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-neutral-700'>
          <Menu.Item>
            {({ active }) => (
              <>
                <div className='flex items-center mr-4 py-2'>
                  <div className='ml-4 mr-3'>
                    <Image
                      className='rounded-full min-w-[2.5rem] min-h-[2.5rem] max-h-[2.5rem] max-w-[2.5rem]'
                      referrerPolicy='no-referrer'
                      src={profileImage}
                      alt='profile'
                      width={100}
                      height={100}
                      priority
                    />
                  </div>
                  <div className='text-sm text-neutral-300 font-semibold'>
                    {session.user.name}
                    <div className='text-neutral-400 font-normal'>
                      {titleCase(session.user.role)}
                    </div>
                  </div>
                </div>
              </>
            )}
          </Menu.Item>
          <div className='separator'></div>
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
                    <link.icon className='h-[1.15rem] w-auto' />
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
                  'block px-4 py-2 text-sm text-red-500 opacity-95 rounded w-[100%]'
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
